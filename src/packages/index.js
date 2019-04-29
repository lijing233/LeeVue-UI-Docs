import LeeButton from './components/button'
import Loading from './components/loading'
import Message from './components/message'

const components = [
  LeeButton
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(Loading.directive);
  console.log(Message);
  Vue.prototype.$message = Message;
  window.$message = Message;
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  version: '1.0.0',
  install,
  LeeButton,
}

