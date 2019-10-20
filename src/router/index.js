import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */



const constantRoutes = [
    {  
        path:'',
        name:'file',
        
        component:() => import('../views/file.vue')
    }
]
const createRouter =() => new Router({
    scrollBehavior: () => ({y:0}),
    routes:constantRoutes,
    mode:'history'
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router