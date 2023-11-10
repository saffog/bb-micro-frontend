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
        landingApp: 'landingAppIndex@http://localhost:9001/remoteEntry.js',
        clientLoginApp: 'clientLoginAppIndex@http://localhost:9002/remoteEntry.js',
        enterpriseLoginApp: 'enterpriseLoginAppIndex@http://localhost:9003/remoteEntry.js',
        internetBankingMenuApp: 'internetBankingMenuAppIndex@http://localhost:9004/remoteEntry.js',
        clientDashboardApp: 'clientDashboardAppIndex@http://localhost:9005/remoteEntry.js',
        enterpriseDashboardApp: 'enterpriseDashboardAppIndex@http://localhost:9006/remoteEntry.js',

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
