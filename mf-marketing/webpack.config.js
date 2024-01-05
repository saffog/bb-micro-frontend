const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");

const deps = require("./package.json").dependencies;
const devDeps = require("./package.json").devDependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:9011/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 9011,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: require.resolve('./styleLoader.ts'),
            },
          },
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: {
          //       localIdentName: "[name]_[local]__[hash:base64:5]",
          //     },
          //   }
          // },
          "postcss-loader"
        ]
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "marketingApp",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './promos' : './src/main.ts'
      },
      shared: {
        ...deps,
        vue: {
          singleton: true,
          requiredVersion: deps.vue
        },
        tailwindcss: {
          singleton: true,
          requiredVersion: devDeps.tailwindcss,
        },
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
