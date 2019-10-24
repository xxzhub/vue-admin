import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */



export const constantRoutes = [{
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [{
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/index')
  }]
}]
export const asyncRoutes = [{

}]
const createRouter = () => new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes,
  mode: 'history'
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher //重置路由器
}

export default router