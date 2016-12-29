import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Add from './add'
import List from './list'

import filter from '../../lib/filter'

//import '../../assets/a.css'

Vue.use(VueRouter)
Vue.use(vueResource)

for (var index in filter) {
	Vue.filter(index, filter[index]);
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/module/add',
      component: Add
    },
    {
      path: '/module/list',
      component: List
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #index 匹配的元素上。
/* eslint-disable no-new */

var a = 1;
new Vue({
  router: router
}).$mount('#index')