module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 6,
      propList: ['*', '!font-size'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['wrap'],
      minPixelValue: 1,
      mediaQuery: true,
      replace: true,
      exclude: [/node_modules/],
      landscape: false,
    },
    'postcss-viewport-units': {
      filterRule: (rule) =>
        rule.nodes.findIndex((i) => i.prop === 'content') === -1,
    }
  },
}
