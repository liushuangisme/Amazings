/*
 * @Author: your name
 * @Date: 2021-07-01 11:24:08
 * @LastEditTime: 2021-07-14 12:53:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import '@/styles.scss'
import '@/style/main.scss'
import * as filters from './filters'
import VueParticles from 'vue-particles'

Vue.use(ElementUI)
Vue.use(VueParticles)

// 页面跳转后滚动条位于最上方
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})


Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')