import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
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
        path:  "/:catchAll(.*)",
        component: NotFoundPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes : routes
})


export default router