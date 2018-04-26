// loading.js
import LoadingComponent from './LoadingPage.vue'

// let $vm
  const dxLoading = {
    install(Vue, options = {}) {
      console.info(1)
      Vue.component('dxLoading', LoadingComponent)
      console.info(2)
    }
  }
  // 这里的判断很重要
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(dxLoading)
  }
  export default dxLoading

