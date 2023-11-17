const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:9004/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 9004,
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
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
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
      name: "PersonalDashboard",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        //"./components/card": "/src/components/card.tsx",
        //"./components/graphic": "/src/components/graphic.tsx",
        "./components/pages/Dasboard": "/src/components/pages/Dasboard.tsx"
      },
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
        tailwindcss: {
          singleton: true,
          requiredVersion: deps.tailwindcss,
        },
        "@faker-js/faker": {
          singleton: true,
          requiredVersion: deps["@faker-js/faker"],
        },
        "chart.js": {
          singleton: true,
          requiredVersion: deps["chart.js"],
        },
        "react-chartjs-2": {
          singleton: true,
          requiredVersion: deps["react-chartjs-2"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
