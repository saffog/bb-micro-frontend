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
        // landingApp: 'landingApp@http://localhost:9001/remoteEntry.js', Example to integrate a MF within the HostApp
        personalLoginApp: 'personalLoginApp@http://localhost:9001/remoteEntry.js',
        companyLoginApp: 'companyLoginApp@http://localhost:9002/remoteEntry.js',
        internetBankingMenuApp: 'internetBankingMenuApp@http://localhost:9003/remoteEntry.js',
        //personalDashboardApp: 'personalDashboardApp@http://localhost:9004/remoteEntry.js',
        personalDashboardApp: "PersonalDashboard@http://localhost:9004/remoteEntry.js",
        companyDashboardApp: 'companyDashboardApp@http://localhost:9005/remoteEntry.js',
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
