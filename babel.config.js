const babelConfig = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          node: true,
        },
      },
    ],
  ],
}

module.exports = babelConfig
