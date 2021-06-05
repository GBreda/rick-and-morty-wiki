import Vue from 'vue';
import App from './App.vue';
import VueApollo from 'vue-apollo';
import apolloProvider from '@/middleware/apollo';

import '@/assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
