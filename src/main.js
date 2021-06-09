import Vue from 'vue';
import VueApollo from 'vue-apollo';
import apolloProvider from '@/middleware/apollo';
import store from './store';
import router from './router';
import App from './App.vue';

import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueApollo);

new Vue({
  store,
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
