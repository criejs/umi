import { defineConfig } from '@umijs/max';
import routes from './src/routes';

export default defineConfig({
  theme: { '@primary-color': '#1DA57A' },
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
  antd: {},
  layout: {},
  routes,
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});

