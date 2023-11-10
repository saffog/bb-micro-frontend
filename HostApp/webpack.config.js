const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:9000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 9000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "HostApp",
      filename: "remoteEntry.js",
      remotes: {
        landingApp: 'landingApp@http://localhost:9001/remoteEntry.js',
        clientLoginApp: 'clientLoginApp@http://localhost:9002/remoteEntry.js',
        enterpriseLoginApp: 'enterpriseLoginApp@http://localhost:9003/remoteEntry.js',
        internetBankingMenuApp: 'internetBankingMenuApp@http://localhost:9004/remoteEntry.js',
        clientDashboardApp: 'clientDashboardApp@http://localhost:9005/remoteEntry.js',
        enterpriseDashboardApp: 'clientDashboardApp@http://localhost:9006/remoteEntry.js',
        aboutUsApp: 'aboutUsApp@http://localhost:9007/remoteEntry.js',
        productsApp: 'productsApp@http://localhost:9008/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
