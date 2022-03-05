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
  const fullPath = join(process.cwd(), slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  type Item = {
    slug: string;
    content: string;
    title?: string;
    date?: string;
    tags?: string[];
  };

  const item: Item = {
    slug: '',
    content: '',
    title: '',
    date: '',
    tags: [],
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      item[field] = slug;
    }
    if (field === 'content') {
      item[field] = content;
    }

    if (field === 'title' || field === 'date' || field === 'tags') {
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
