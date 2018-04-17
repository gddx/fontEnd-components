/**
* name: LoadingPage
* desc: 整页loading， 使用默认loading样式，调用： this.$loading()
        支持修改样式，调用：this.$loading({ style: { background: 'rgba(0,0,0,0.3)' } })
        支持手动隐藏， 调用： this.$loading({visible: true})
        支持延时自动隐藏， 调用： this.$loading({duration: 2500})
        暂时先这样哈。。需要扩展功能-定时关闭功能、更换loading图标文字
  author: 林墁霓
**/
import Vue from 'vue'
import LoadingPage from './loadingPage.vue'

let LoadingConstructor = Vue.extend(LoadingPage)
// 无法调用close
LoadingConstructor.prototype.close = function () {
  console.info('traget:', this.$el)
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el)
  }
  this.$destroy()
  this.visible = false
}

const Loading = (options = {}) => {
  // if (Vue.prototype.$loading) return
  const opt = {
    duration: 0, // 默认延时时间
    ...options
  }
  let instance = new LoadingConstructor({
    data: options
  })
  const tpl = instance.$mount().$el
  const target = document.body
  if (opt.close) {
    instance.hide()
    return
  }
  // 定时关闭
  if (opt.duration) {
    setTimeout(function () {
      target.removeChild(tpl)
    }, opt.duration || 100)
  }
  target.appendChild(tpl)
  return instance
}
export default Loading
