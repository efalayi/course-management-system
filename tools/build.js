import webpack from 'webpack'
import webpackServerConfig from '../webpack.server.config'

const compiler = webpack(webpackServerConfig);

compiler.run((error, stats) => {
  if (error) {
    console.error(err);
    return;
  }
  console.log(stats.toString({
    chunks: false,
    colors: true
  }));
})
