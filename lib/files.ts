import fs from 'fs';
import { join } from 'path';

const root = process.cwd();

export function getAllfiles(type: string) {
  const prefixPaths = join(root, 'data', type);
  const allFiles: string[] = [];
  getDirents(prefixPaths, allFiles);
  return allFiles;
}

export function getDirents(dirName: string, allFiles: string[]) {
  const dirents = fs.readdirSync(dirName, { withFileTypes: true });

  dirents.forEach((dirent) => {
    if (dirent.isDirectory()) {
      const path = join(dirName, dirent.name);
      getDirents(path, allFiles);
    } else {
      allFiles.push(join(dirName, dirent.name));
    }
  });
}
