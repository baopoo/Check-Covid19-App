const GettingStared = () => import('../views/GettingStarted.vue')


export const routes = [
    {
        path: 'getting-started',
        name: 'getting-started',
        component: GettingStared,
    },
    {
        path: '',
        redirect: {name: 'getting-started'},
    }
  ];    