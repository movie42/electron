import type { Configuration } from "webpack";

import path from "path";

import { plugins } from "./webpack.plugins";
import { rules } from "./webpack.rules";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
});

console.log(__dirname);
export const rendererConfig: Configuration = {
  module: {
    rules
  },
  plugins,
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  }
};
