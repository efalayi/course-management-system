import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const optimize = (environment, configName) => {
  const optimization = {}
  if (environment === 'production') {
    optimization.minimizer = [new UglifyJsPlugin()]
  }
  if (configName === 'client') {
    optimization.splitChunks = {
      name: true,
    }
  }
  return optimization
}

export default optimize
