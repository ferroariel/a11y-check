export default {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
};
