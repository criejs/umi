import { defineConfig } from 'umi';

export default defineConfig({
  vite: {},
  clickToComponent: {},
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
