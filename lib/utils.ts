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
    draft: boolean;
    style: string;
  };

  const item: Item = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: [],
    summary: '',
    draft: false,
    style: '',
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
      field === 'summary' ||
      field === 'style'
    ) {
      item[field] = data[field];
    }
    if (field === 'draft') {
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
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (dateB > dateA) {
        return 1;
      } else if (dateA > dateB) {
        return -1;
      }

      return dateB >= dateA ? 1 : -1;
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
