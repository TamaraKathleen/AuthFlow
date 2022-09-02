module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@pages': './src/pages',
        '@components': './src/components',
        '@assets': './src/assets',
        '@contexts': './src/contexts',
        '@routes': './src/routes',
        '@services': './src/services',
      }
    }]
  ]
};
