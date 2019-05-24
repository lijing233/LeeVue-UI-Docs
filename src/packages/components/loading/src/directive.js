import Vue from 'vue';
import { addClass, removeClass, getStyle } from '@/utils/dom.js';
import Loading from './loading.vue'

const Mask = Vue.extend(Loading)

const loadingDirective = {}
loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          // 全屏loading
          el.originalPosition = getStyle(document.body, 'position');
          el.originalOverflow = getStyle(document.body, 'overflow');
          insertDom(document.body, el, binding);
        } else {
          // 局部loading
          el.originalPosition = getStyle(el, 'position');
          insertDom(el, el, binding);
        }
      })
    } else {
      // ** 待优化 ***
      // element将关闭的一些逻辑传入疯装好的函数中执行，因为有动画需要等待动画完成还原样式，默认动画时间300ms
      setTimeout(() => {
        const target = binding.modifiers.fullscreen
          ? document.body
          : el;
        removeClass(target, 'loading-parent--relative');
        el.domVisible = false;
      }, 400)
      el.instance.visible = false;
    }
  }

  const insertDom = (parent, el, binding) => {
    if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(property => {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        addClass(parent, 'loading-parent--relative')
      }

      el.domVisible = true;

      // appendChild--相当于剪切粘贴，当update时el.mask被原地appendChild,并不会被重复放入父元素
      parent.appendChild(el.mask);

      Vue.nextTick(() => {
        el.instance.visible = true;
      });
      el.domInserted = true;
    }
  }

  Vue.directive('loading', {
    bind: function(el, binding, vnode) {
      console.log('el :', el);
      console.log('binding :', binding);
      console.log('vnode :', vnode);
      // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
      // el: 绑定的dom
      // binding: 绑定指令的属性名和属性值
      // vnode: 绑定的vue实例
      const loadingText = el.getAttribute('lee-loading-text');
      const vm = vnode.context;
      const mask = new Mask({
        el: document.createElement('div'),
        data: {
          fullscreen: !!binding.modifiers.fullscreen,
          loadingText: vm && vm[loadingText] || loadingText,
        }
      })
      // 将mask实例保存到el中
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};
      binding.value && toggleLoading(el, binding);
    },
    inserted: function() {
      // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    },
    update: function(el, binding) {
      el.instance.setText(el.getAttribute('lee-loading-text'));
      // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding)
      }

    },
    componentUpdated: function() {
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    },
    unbind: function(el, binding) {
      // 只调用一次，指令与元素解绑时调用
      if (el.domInserted) {
        el.mask &&
        el.mask.parentNode &&
        el.mask.parentNode.removeChild(el.mask);
        toggleLoading(el, { value: false, modifiers: binding.modifiers });
      }
    }
  })
}

export default loadingDirective