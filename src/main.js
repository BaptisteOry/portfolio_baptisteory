import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Simplebar */
import simplebar from 'simplebar-vue'

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserAlt, faBookOpen, faHandsHelping, faChevronLeft, faChevronRight, faFileCode, faPaintBrush, faVideo, faEllipsisH, faEnvelope, faPhone, faCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserAlt, faBookOpen, faHandsHelping, faChevronLeft, faChevronRight, faFileCode, faPaintBrush, faVideo, faEllipsisH, faEnvelope, faPhone, faCircle, faSpinner)

Vue.component('simplebar', simplebar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
