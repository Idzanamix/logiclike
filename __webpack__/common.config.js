const webpack = require("webpack");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const PUBLIC_DIR = path.resolve(__dirname, "..", "public");
const STATIC_DIR = path.resolve(__dirname, "..", "static");
const devMode = process.env.NODE_ENV !== 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

const plugins = [
  new FileManagerPlugin({
    events: {
      // Remove build dir
      onStart: {
        delete: [BUILD_DIR],
      },
      onEnd: {
        // Copy static files
        copy: [
          {
            source: STATIC_DIR,
            destination: BUILD_DIR,
          },
        ],
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: path.join(PUBLIC_DIR, "index.html"),
    filename: "index.html",
  }),
  new webpack.HotModuleReplacementPlugin(), // For page reloading
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
  historyApiFallback: true,
  open: true,
  compress: true,
  allowedHosts: "all",
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: true,
    },
    progress: true,
  },
  port: 3000,
  devMiddleware: {
    writeToDisk: true,
  },
};

module.exports = {
  devServer,
  plugins,
  entry: path.join(__dirname, "..", "src", "index.tsx"),
  output: {
    path: BUILD_DIR,
    publicPath: "/",
  },
  // Checking the maximum weight of the bundle is disabled
  performance: {
    hints: false,
  },
  // Modules resolved
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    strictExportPresence: true, // Strict mod to avoid of importing non-existent objects
    rules: [
      // --- JS | TS USING BABEL
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true, // Using a cache to avoid of recompilation
          },
        },
      },
      // --- HTML
      { test: /\.(html)$/, use: ["html-loader"] },
      // --- S/A/C/SS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates css into CommonJS
            options: {
              esModule: true,
              // css modules
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // format of output
                namedExport: true, // named exports instead of default
              },
            },
          },
          {
            // autoprefixer
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
        exclude: /(\.global)\.scss$/
      },
      {
        test: /(\.global)\.scss$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      },
      // --- S/A/SS
      {
        test: /\.(s[ac])ss$/i,
        use: ["sass-loader"],
      },
      // --- IMG
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash][ext]",
        },
      },
      // --- FONTS
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },
};
