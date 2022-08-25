export default [
  {
    path: '/',
    redirect: '/course',
  },
  {
    name: '课程管理',
    path: '/course',
    icon: 'BookOutlined',
    routes: [
      {
        name: '课程类型新建',
        path: '/course/type/:id',
        component: './course/type/$id',
        hideInMenu: true,
      },
      {
        name: '课程类型',
        path: '/course/type',
        component: './course/type',
      },
      {
        name: '课程属性',
        path: '/course/prop',
        component: './course/prop',
      },
      {
        name: '属性改写规则',
        path: '/course/rule',
        component: './course/rule',
      },
    ],
  },
  {
    name: '课程包管理',
    path: '/course-package',
    icon: 'FileZipOutlined',
    routes: [
      {
        name: '课包条件管理',
        path: '/course-package/condition',
        component: './course-package/condition',
      },
      {
        name: '课程包管理',
        path: '/course-package/manage',
        component: './course-package/manage',
      },
      {
        name: '课程包说明和图片',
        path: '/course-package/memo',
        component: './course-package/memo',
      },
    ],
  },
  {
    name: 'APP页面管理',
    path: '/app-manage',
    icon: 'AppstoreOutlined',
    routes: [
      {
        name: '首页配置',
        path: '/app-manage/manage',
        component: './app-manage/manage',
      },
      {
        name: '首页预览',
        path: '/app-manage/preview',
        component: './app-manage/preview',
      },
      {
        name: '频道管理',
        path: '/app-manage/channel',
        component: './app-manage/channel',
      },
      {
        name: '搜索配置',
        path: '/app-manage/search',
        component: './app-manage/search',
      },
    ],
  },
  {
    name: ' CRUD 示例',
    path: '/users',
    icon: 'SmileOutlined',
    component: './users',
  },
  {
    name: ' docs',
    path: '/docs',
    icon: 'SmileOutlined',
    // 权限中心化校验
    wrappers: [
      '@/wrappers/auth',
    ],
    component: './docs',
  },
  {
    name: ' go',
    path: '/go',
    icon: 'SmileOutlined',
    component: './go/_layout',
    routes: [
      {
        name: ' go',
        path: '/go/:id',
        component: './go/$id',
      },
      {
        name: '*',
        redirect: '/go',
      },
    ],
  },
  {
    path: '/login',
    layout: false,
    component: './users/login',
  },
  {
    path: '/403',
    layout: false,
    component: './403',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
