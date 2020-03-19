/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: "./src/index.tsx",
  entry: {
    bundle: './src/index.tsx',
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
    },
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            /* hot-loader */
            ['react-hot-loader/babel'],
            /* babel-plugin-import 使用 */
            [
              'import',
              {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css', // style: true` 会加载 less 文件
              },
            ],
          ],
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            // loader: 'style-loader', // creates style nodes from JS strings
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
            },
          },
        ],
        sideEffects: true,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@types': path.resolve('./', 'src', 'types.ts'),
      '@service': path.resolve('./', 'src', 'Service'),
      '@utils': path.resolve('./', 'src', 'Utils/'),
      '@com': path.resolve('./', 'src', 'Components/'),
    },
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: './',
    filename: '[name].[hash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3003,
    publicPath: 'http://localhost:3003/',
    // hotOnly: true,
  },
  plugins: [
    /* 简单版本 */
    // new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'example',
    //   template: './public/index.html',
    // }),

    /* 拓展版本 */
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
        title: 'example',
        template: './public/index.html',
        chunks: ['vendors~bundle', 'bundle'],
    }),
  ],
};
