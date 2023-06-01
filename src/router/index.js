const GettingStared = () => import('../views/GettingStarted.vue')
const Location = () => import('../views/Location.vue')


export const routes = [
    {
        path: '/getting-started',
        name: 'getting-started',
        component: GettingStared,
    },
    {
        path: '/select-location',
        name: 'select-location',
        component: Location,
    },
    {
        path: '',
        redirect: {name: 'getting-started'},
    }
  ];    