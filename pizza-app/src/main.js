import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store'


Vue.use(VueRouter)
//axios配置全局默认路径
axios.defaults.baseURL="https://blog-e51ae-default-rtdb.firebaseio.com/"
//配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http=axios
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPossition){
    // return {x:0,y:100}
     return {selector:'.btn'}
  }
})

// //全局守卫
// router.beforeEach((to,from,next)=>{
//   // alert("还没有登录，请先登录!");
//   // if()
  
//   // next()
//   //判断store.getter.isLogin ===false判断是否登录
//   if(to.path=='/login'||to.path=='/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录!");
//   }
// })

//后置钩子
router.afterEach((to,from) =>{

}) 

new Vue({
  el: '#app', render: h => h(App),
  router,
  
  store
 
})
