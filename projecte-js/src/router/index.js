import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import Calculator from '../components/AppCalculator.vue';
import FetchData from '../views/FetchData.vue';
import AxiosData from '../views/AxiosData.vue';

const routes = [
    { path: '/', component: LandingPage },
    { path: '/calculator', component: Calculator },
    { path: '/fetch-data', component: FetchData },
    { path: '/axios-data', component: AxiosData }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;