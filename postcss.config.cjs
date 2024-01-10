module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        './src/css/global.css'
      ]
    },
    'postcss-pxtorem': {
      mediaQuery: true,
      propList: [
        '--*',
        '*height',
        '*width',
        'font-size',
        'font',
        'grid-template-*',
        'letter-spacing',
        'line-height'
      ]
    },
    'postcss-preset-env': {
      stage: 1,
      browsers: ['> 1% in US', 'last 2 versions', 'not dead']
    }
  }
};
