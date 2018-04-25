// loading.js
import LoadingComponent from './LoadingPage.vue'

let $vm

export default {
  install(Vue, options = {}) {
    if (!$vm) {
      const LoadingPlugin = Vue.extend(LoadingComponent)
      $vm = new LoadingPlugin({
        el: document.createElement('div'),
        data: options
      })
      document.body.appendChild($vm.$el)
    }
    $vm.visible = false
    const loading = {
      show({ text, durTime, background, color } = options) {
        $vm.visible = true
        $vm.text = text
        $vm.background = background
        $vm.color = color

        if (durTime) {
          // 定时关闭
          setTimeout(() => {
            $vm.visible = false
          }, durTime)
        }
      },
      hide() {
        $vm.visible = false
      }
    }
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    // Vue.prototype.$loading = Vue.$loading
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}
