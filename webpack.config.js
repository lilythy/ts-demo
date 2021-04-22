const path = require("path");

module.exports = {
  // 1. 影响提示, 2. 文件大小 development/production
  // mode: " local, dev, production",
  // 入口是 tsx, 但程序不认识 jsx, 配置 rules
  entry: {
    index: "./lib/index.tsx"
  },
  // 输出目录
  output: {
    // 因为不同的操作系统, 路径不一样, 所以使用 __dirname, 当前路径
    path: path.resolve(__dirname, "dist/lib"),
    // 库的name
    library: "YUI",
    // 库最后导出的格式
    libraryTarget: "umd"
  },

  // 配置 import 引入, 尝试按顺序解析这些后缀名,如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // 配置 ts tsx
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
    ]
  }
};