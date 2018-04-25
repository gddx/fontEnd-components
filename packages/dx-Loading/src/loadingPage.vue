<template lang="pug">
  .loadpage#loadPage(
    ref="loadPage"
    v-if="visible"
    :style="{backgroundColor: background}")
    .loader
    .loading-label(v-if="text")
      h3(:style="{color: color}") {{text}}
</template>
<script>
/**
 * @name loadingPage 全局组件
 * @author ManieLam
 * @description 配套components/Loading/index.js使用
*/
export default {
  props: {
    visible: Boolean,
    text: String,
    background: {
      type: String,
      default: '#6dc0f9'
    },
    color: {
      type: String,
      default: '#373737'
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
