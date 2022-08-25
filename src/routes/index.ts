export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './index',
  },
  {
    name: 'docs演示',
    path: '/docs',
    component: './docs',
  },
  {
    name: ' go',
    path: '/go',
    routes:[
      {
        name: ' go',
        path: '/go/:id',
        component: './go/$id',
      }
    ]
  },
  {
    path: '*',
    component: './404',
  },
]