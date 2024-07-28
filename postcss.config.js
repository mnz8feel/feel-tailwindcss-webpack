const path = require('path');

module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [['tailwindcss'], ['autoprefixer']],
  // 指定 tailwindcss config 文件，需要使用 path
  // tailwindcss: { config: path.join(__dirname, 'tailwind.config.js') },
};
