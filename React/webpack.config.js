const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('src/popup/index.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
      
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders : 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins : [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        type: 'assets/resource',
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
           ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve('src/static'), to: path.resolve('dist') },
      ],
      }),
      ...getHtmlPlugins(['popup', 'options']), 
    ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  

}
    function getHtmlPlugins(chunks) {
    return chunks.map(chunk => new HtmlPlugin({
      title: 'Help Market',
      filename: `${chunk}.html`,
      chunks: [chunk]
    }))
  }