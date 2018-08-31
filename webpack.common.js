var webpack = require("webpack");
var version = require("./package.json").version;
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var nodeExternals = require('webpack-node-externals')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
function resolve (dir) {
  return path.join(__dirname, dir)
}

var banner =
  "/**\n" +
  " * vue-markdown v" + version + "\n" +
  " * https://github.com/miaolz123/vue-markdown\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
  entry: "./src/main.js",
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js",
    library: "VueMarkdown",
    libraryTarget: "umd"
  },
  externals: nodeExternals(),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin({banner: banner, raw: true }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ],

  module: {
    rules: [{
      test: /\.vue$/,
      loader: "vue-loader",
    },
    {
      test: /\.css$/,
      use: [
        "vue-style-loader",
        MiniCssExtractPlugin.loader,
        'css-loader'
      ],
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    }]
  },
}
