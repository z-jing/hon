import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import iView from 'iview';
import './components'
import './assets/styles/layout.scss'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.use(iView);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
