import Vue from 'vue'
import App from './App.vue'

import 'semantic-ui-less/semantic.less'
import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);

new Vue({
  el: '#app',
  render: h => h(App)
});
