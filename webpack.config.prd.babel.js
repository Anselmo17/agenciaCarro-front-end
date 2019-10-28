import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//const publicPath = '/';

// Carregando as variaveis 
const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    MODULE_NAME: JSON.stringify('CARROS'),
    //PUBLIC_PATH: JSON.stringify(publicPath),
    API: JSON.stringify('https://agencia-carros-api.herokuapp.com'),
  }
};

const PATHS = {
  public: '/',
  dist: path.resolve(__dirname, './dist'),
  appSrc: path.resolve(__dirname, './src'),
  appNodeModules: path.resolve(__dirname, './node_modules')
};




// exportando as informações 
export default {
  devtool: 'eval-source-map',
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('file-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: PATHS.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              presets: ['env', 'react', 'stage-1'],
              ignore: ['node_modules'],
              plugins: [
                [
                  'react-intl',
                ]
              ],
              babelrc: false,
              compact: true
            }
          },
          {
            test: /(\.css)$/,
            use: ExtractTextPlugin.extract({
              fallback: require.resolve('style-loader'),
              use: require.resolve('css-loader'),
              publicPath: PATHS.public
            })
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.ejs$/, /\.html$/, /\.json$/, /\.graphql$/, /\.gql$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      title: 'Agencia Carros',
      author: 'Agencia',
      template: './public/index.html', //'./src/assets/templates/index.template.ejs', //'./public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
