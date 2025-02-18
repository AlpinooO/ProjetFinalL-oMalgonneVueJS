import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import CookerPage from './pages/CookerPage.vue'
import PanierPage from './pages/PanierPage.vue'
import CookerDetailPage from './pages/CookerDetail.vue';
import { createWebHashHistory} from 'vue-router'
import { createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: HomePage
    },{
        path: '/login',
        component: LoginPage
    },{
        path: '/register',
        component: RegisterPage
    },{
        path: '/cooker',
        component: CookerPage
    },{
        path: '/panier',
        component: PanierPage
    },{
        path: '/cooker/:id',
        component: CookerDetailPage,
        props: true
    },
    
    {
        path:  "/:catchAll(.*)",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes : routes
})


export default router