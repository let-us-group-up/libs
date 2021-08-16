const path = require("path")
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  core: {
    // Has problems with HMR, @storybook/addon-a11y and something with docs plugin export
    // Project includes dependencies for it
    // builder: 'storybook-builder-vite',
    builder: 'webpack5',
  },
  features: {
    previewCsfV3: true,
  },
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    },
  }),
};
