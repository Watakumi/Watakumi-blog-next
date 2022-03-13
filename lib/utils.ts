import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'data/blog');

export const getPostSlugs = () => {
  const allDirents = fs.readdirSync(postsDirectory, {
    withFileTypes: true,
  });
  return allDirents
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = join(process.cwd(), 'data/blog', slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  type Item = {
    slug: string;
    content: string;
    title: string;
    date: string;
    tags?: string[];
    summary: string;
  };

  const item: Item = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: [],
    summary: '',
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = slug;
    }
    if (field === 'content') {
      item[field] = content;
    }

    if (
      field === 'title' ||
      field === 'date' ||
      field === 'tags' ||
      field === 'summary'
    ) {
      item[field] = data[field];
    }
  });

  return item;
};

export const getAllPosts = (fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => {
      // 辞書順ソート
      // 目的に応じて、日付順などでソートしてもよい
      const slugA = a.slug.toString().toLowerCase();
      const slugB = b.slug.toString().toLowerCase();

      if (slugA > slugB) {
        return 1;
      } else {
        slugB > slugA;
      }

      return slugA >= slugB ? 1 : -1;
    });

  return posts;
};

export function getAllTags() {
  const slugs = getPostSlugs();
  let tagCount: {
    [index: string]: number;
  } = {};

  slugs.forEach((slug) => {
    const tagNames = getTagsBySlug(slug);
    tagNames.forEach((tag) => {
      if (tag in tagCount) {
        tagCount[tag] += 1;
      } else {
        tagCount[tag] = 1;
      }
    });
  });

  return tagCount;
}

function getTagsBySlug(slug: string): string[] {
  const fullPath = join(process.cwd(), 'data/blog', slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data } = matter(fileContents);

  return data['tags'];
}
