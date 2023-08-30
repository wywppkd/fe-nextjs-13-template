/**
 * next.js 默认配置了 postcss-flexbugs-fixes, postcss-preset-env 插件,
 * 但是如果要修改 postcss 配置(比如新增一个插件), 则会覆盖默认配置, 需要手动配置 postcss-flexbugs-fixes, postcss-preset-env
 */
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      'postcss-px-to-viewport-update',
      {
        include: /\/src\/app\/mobile\//, // 转 vw 文件白名单
        viewportWidth: 375, // 视窗的宽度，对应我们设计稿的宽度，一般是750
        unitPrecision: 2, // 指定'px'转换为视窗单位值得小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位,建议使用vw
        selectorBlackList: ['.ignore', '.hairliness'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值。
        mediaQuery: false, // 允许在媒体查询中转换`px`
      },
    ],
  ],
};
