import Vue from 'vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

// export const a = 5;
// export default Home;
// Vue.config.productionTip = false;

(window as any).components = {
  Home,
  About,
};

// new Vue({
//   render: (h) => h(Home),
// }).$mount('#micro-app1');

// (window as any).micro_app1 = Home;

(window as any).initialize = () => {
  new Vue({
    render: (h) => h(Home),
  }).$mount('#micro-app1');
}
/*
(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (typeof define === 'function' && define.amd) define(definition);
  else context[name] = definition();
})('test', this, function() {
  return 5;
})
*/
