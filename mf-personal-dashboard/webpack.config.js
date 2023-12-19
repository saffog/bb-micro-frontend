const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

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
        use: [{
          loader: 'style-loader',
          options: {
            insert: require.resolve('./styleLoader.ts'),
          },
        }, "css-loader", "postcss-loader"],
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
      name: "personalDashboardApp",
      filename: "remoteEntry.js",
      remotes: {
        marketingApp: "marketingApp@http://localhost:9011/remoteEntry.js",
      },
      exposes: {
        "./personalDashboardAppIndex":"./src/bootstrap",
        "./components/pages/Dashboard": "/src/components/pages/Dashboard.tsx"
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
    
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
