import { join } from 'path';
import { getDirents } from '../../lib/files';

describe('#getDirents', () => {
  test('writes allDirs', () => {
    const type = 'blog';
    const path = join(process.cwd(), 'data', type);
    const allDirs: string[] = [];
    getDirents(path, allDirs);
    expect(allDirs[0].includes('sample')).toBeTruthy();
  });
});
