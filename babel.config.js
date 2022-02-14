module.exports = function (api) {
  api.cache.using(() => process.env.coverage);

  const presets = ['@vue/cli-plugin-babel/preset'];
  const plugins = [];

  if (process.env.coverage) {
    plugins.push([
      'babel-plugin-istanbul',
      {
        extension: ['.ts', '.tsx', '.js', '.vue'],
        exclude: ['node_modules', 'src/main.ts'],
        useInlineSourceMaps: false,
      },
    ]);
  }

  return {
    presets,
    plugins,
  };
};
