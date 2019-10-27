import {
  asyncRoutes,
  constantRoutes
} from '@/router'

/**
 * 根据meta.role确认该用户是否有权限
 * @param roles
 * @param route
 * 
 */

function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}