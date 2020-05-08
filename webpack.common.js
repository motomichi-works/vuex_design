const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry point
  entry: {
    'javascripts/first_page': './src/javascripts/vue/pages/first_controller/first_action/index.js',
    'style': './src/stylesheets/style.scss',
  },
  // 出力するパスは絶対パスで書きます
  output: {
    path: `${__dirname}/webroot/packed`,
    filename: (arg) => {
      return '[name].bundle.js'
    },
  },
  // webpack4はlordersではなくなりました
  module: {
    rules: [
      // 拡張子.vueのファイルに対する設定
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              loaders: {
                js: 'babel-loader',
              },
            },
          },
          {
            loader: 'eslint-loader',
          },
        ]
      },
      // 拡張子.jsのファイルに対する設定
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ]
      },
      // 拡張子.scssのファイルに対する設定(.vueの中にscssを書きたい場合もここに設定します。)
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // {
          //   loader: 'style-loader',
          // },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
    ]
  },
  // デフォルトの設定値だけでは足りないことについて解決します
  resolve: {
    // モジュールを読み込むときに検索するディレクトリの設定
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    // importするときに省略できる拡張子の設定
    extensions: ['.js', '.vue'],
    alias: {
      // importのファイルパスを相対パスで書かないようにsrcのrootを設定
      '@': path.join(__dirname, 'src'),
      // 例えばmain.js内で `import Vue from 'vue';` と記述したときの`vue`が表すファイルパスを指定
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  // プラグインを列挙
  plugins: [
    new VueLoaderPlugin(),
    // cssの出力先を指定する
    new MiniCssExtractPlugin({
      // filename: `${__dirname}/webroot/packed/[name].css`,
      filename: 'stylesheets/[name].css',
    }),
  ],
}
