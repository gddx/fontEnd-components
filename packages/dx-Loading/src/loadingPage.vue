<template lang="pug">
  .loadpage#loadPage(
    ref="loadPage"
    v-if="visible"
    @click.self="handleWrapperClick"
    :style="{backgroundColor: background}")
    .loader
    .loading-label(v-if="text")
      h3 {{text}}
</template>
<script>
/**
* name: loadingPage 全局组件
  desc: 配套components/Loading/index.js使用
* author: 林墁霓
*/
// import { mapMutations, mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
      background: null,
      visible: true, // 控制loading的开关, 默认：开
      text: null
    }
  },
  methods: {
    handleWrapperClick () {
      this.hide()
    },
    hide () {
      const _this = this
      setTimeout(() => {
        this.visible = false
        console.info('hide:visible', this.avisible)
        console.info('this.$el', this.$el)
        console.info('this.$el.parentNode', _this.$el.parentNode)
        console.info('document.body', document.body)
        // this.$el.parentNode.removeChild(this.$el)
        // document.body.removeChild(this.$el)
      }, 1000)
      // this.$destroy()
      // console.info(this.$refs.loadPage)
    },
    show () {
      this.visible = true
    }
  }
}
</script>
<style lang="sass" scoped>
.loading-label
  line-height: 50px
  font-size: 2em
  position: absolute
  top: 63%
  left: 50%
  transform: translate(-50%, -63%)
</style>
