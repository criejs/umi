import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  routes,
  hash: true,
  history: {
    type: 'hash'
  },
  define: {
    'process.env': process.env,
  },
  // vite调试，build线上务必webpack
  vite: process.env.mode === 'dev' ? {} : false,
  clickToComponent: {},
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
