import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import uuidv1 from 'uuid/v1';

const publicPath = '/nec/';

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
    MODULE_NAME: JSON.stringify('NEC'),
    PUBLIC_PATH: JSON.stringify(publicPath),
    API: JSON.stringify('https://agencia-carros-api.herokuapp.com'),
  }
};

const PATHS = {
  public: publicPath,
  dist: path.resolve(__dirname, './dist'),
  appSrc: path.resolve(__dirname, './src'),
  appNodeModules: path.resolve(__dirname, './node_modules')
};

export default {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: PATHS.dist,
    publicPath: PATHS.public,
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  //   alias: {
  //     components: path.resolve(__dirname, 'src/components/'),
  //     containers: path.resolve(__dirname, 'src/containers/'),
  //     utils: path.resolve(__dirname, 'src/utils/'),
  //     auth: path.resolve(__dirname, 'src/auth/')
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: PATHS.appSrc
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
                  {
                    messagesDir: './extracted-messages/',
                    enforceDescriptions: true
                  }
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
    // new HtmlWebpackPlugin({
    //   title: 'Consultora Natura Empreendedora',
    //   author: 'Accenture',
    //   template: './src/assets/templates/index.template.ejs',
    //   inject: 'body'
    // }),
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
