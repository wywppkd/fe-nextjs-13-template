const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',
  '**/*.{js,jsx,tsx,ts,less,md,json}': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
  ],
};
