export const symlinkSource = 'packages/symlink-shared/index.ts';

export const features = [
  'import through a real filesystem symlink',
  'render values exported from the linked module',
  'verify utoopack can follow the linked path',
];

export function describeSymlinkCase(name: string) {
  return `Hello ${name}, this content comes from a symlinked module.`;
}
