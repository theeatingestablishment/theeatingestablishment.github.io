export { default as Item } from '../../components/item.vue'
export { default as Menu } from '../../components/menu.vue'

export const LazyItem = import('../../components/item.vue' /* webpackChunkName: "components/item" */).then(c => c.default || c)
export const LazyMenu = import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
