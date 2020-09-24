module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      '@babel/preset-env',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      '@babel/plugin-syntax-optional-chaining',
      '@babel/plugin-proposal-class-properties',
    ],
  };
};
