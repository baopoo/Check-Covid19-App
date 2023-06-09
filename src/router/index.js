const GettingStared = () => import('../views/GettingStarted.vue')
const Location = () => import('../views/Location.vue')
const OfficeGuidelines = () => import('../views/OfficeGuidelines.vue')
const HealthChecklist = () => import('../views/HealthChecklist.vue')
const ContactInformation = () => import('../views/ContactInformation.vue')
const Alert = () => import('../views/Alert.vue')


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
        path: '/contact-information',
        name: 'contact-information',
        component: ContactInformation,
    },
    {
        path: '/submit',
        name: 'submit',
        component: Alert,
    },
    {
        path: '',
        redirect: {name: 'getting-started'},
    }
  ];    