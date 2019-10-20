


/**
 * 是否是外部链接
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?: |mailto:tel:)/.test(path)
}

/**
 * 检验是否有权限
 * @param {string} str
 * @returns {Boolean}
 */

 export function validUsername(str) {
     const valid_map = ['admin', 'editor']
     return valid_map.indexOf(str.trim()) >= 0
 }