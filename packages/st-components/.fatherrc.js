export default {
  /*
    father 配置 https://github.com/umijs/father/tree/2.x
    事实上，我们会依次找 src/index.tsx, src/index.ts, src/index.jsx, src/index.js，
    如果存在，则会作为默认的 entry。如果库文件为 typescript，则需要在根目录配置tsconfig.json，否则会编译错误。
  */
  // entry: 'src/index.ts',
  /* esm 格式 是否输出，以及输出的打包方式 */
  esm: {
    type: 'rollup',
    file: 'index',
  },
  /* 在 rollup 模式下做 less 编译，支持配置 less 在编译过程中的 Options */
  lessInRollupMode: {},
  /* 配置是否提取 css 为单独文件。 */
  extractCSS: true,
};
