import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  // vite调试，build线上务必webpack
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
