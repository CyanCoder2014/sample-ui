import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },

    ]
  },

  {
    path: '/agenda',
    redirect: 'agenda/list',
    component: DashboardLayout,
    children: [
      {
        path: '/agenda/list',
        name: 'Agenda List',
        component: () => import('../views/Agenda/Index.vue')
      },
      {
        path: '/agenda/add',
        name: 'Agenda Add',
        component: () => import('../views/Agenda/Add.vue')
      },
      {
        path: '/agenda/edit/:id',
        name: 'Agenda Edit',
        component: () => import('../views/Agenda/Edit.vue')
      },


    ]
  },



  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },

      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
