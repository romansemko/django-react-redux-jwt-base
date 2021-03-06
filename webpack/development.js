import webpackConfig from './_base';

webpackConfig.devtool = 'source-map';

// add boostrap-loader and font-awesome-webpack to beginning of entry list
webpackConfig.entry.app.splice(0, 0, 'bootstrap-loader', 'font-awesome-webpack!./src/static/styles/font-awesome.config.js');

export default webpackConfig;
