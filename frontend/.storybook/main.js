const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config) => {
    // node_modules 폴더와 styles 폴더 안의 모듈을 인식할 수 있도록 설정

    // 절대 경로 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../components'),
      '@assets': path.resolve(__dirname, '../public/assets'),
    };

    return config;
  },
  framework: '@storybook/react',
};
