import VueMarkdownComponent from './VueMarkdown'
const VueMarkdown = {
  install: function install(Vue) {
    Vue.component('vue-markdown', VueMarkdownComponent)
  },
  VueMarkdownComponent
}
export default VueMarkdown
