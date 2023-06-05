const GettingStared = () => import('../views/GettingStarted.vue')
const Location = () => import('../views/Location.vue')
const OfficeGuidelines = () => import('../views/OfficeGuidelines.vue')
const HealthChecklist = () => import('../views/HealthChecklist.vue')


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
        path: '/office-guidelines',
        name: 'office-guidelines',
        component: OfficeGuidelines,
    },
    {
        path: '/health-checklist',
        name: 'health-checklist',
        component: HealthChecklist,
    },
    {
        path: '',
        redirect: {name: 'getting-started'},
    }
  ];    