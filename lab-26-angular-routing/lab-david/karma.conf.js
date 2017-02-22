'use strict';

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    webpack: webpackConfig,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*-test.js'
    ],
    // client: {
    //   jasmine: {
    //     random: true,
    //     seed: '4321',
    //     stopOnFailure: true
    //   }
    // },
    exclude: [
    ],
    preprocessors: {
      'src/**/*.scss': ['scss'],
      'test/**/*-test.js': ['babel', 'webpack']
    },
    // babelPreprocessor: {
    //   options: {
    //     presets: ['es2015'],
    //     sourceMap: 'inline'
    //   }
    // },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
};
