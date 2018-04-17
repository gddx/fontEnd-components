import service from './src/index'

export default {
  install (Vue) {
    Vue.prototype.$dxLoading = service
  },
  service
}
