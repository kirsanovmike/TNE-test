module.exports = {
  pages: {
    index: {
      // точка входа для страницы
      entry: "src/main.js",
      // исходный шаблон
      template: "public/index.html",
      // в результате будет dist/index.html
      filename: "index.html",
      // когда используется опция title, то <title> в шаблоне
      // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
      title: "tne-test",
      // все фрагменты, добавляемые на этой странице, по умолчанию
      // это извлечённые общий фрагмент и вендорный фрагмент.
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          additionalData: '@import "@/assets/style.scss";',
        },
      },
    },
  },
};
