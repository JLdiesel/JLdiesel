module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            '@utils': './src/utils',
            '@components': './src/component',
            '@screens': './src/screens',
            '@assets': './src/assets',
          },
        },
      ],

      'react-native-reanimated/plugin'
    ]
  };
};
