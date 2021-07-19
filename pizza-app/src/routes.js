import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'


//二级路由
import Contact from "./components/about/Contact";
import Delivery from "./components/about/Delivery";
import History from "./components/about/History";
import OrderingGuide from "./components/about/OrderingGuide";

export const routes=[
    {path:'/',name:"homeLink",components:{
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }},
    {path:'/menu',name:"menuLink",component:Menu},
    {path:'/admin',name:"adminLink",component:Admin,
  //   beforeEnter:(to,from,next)=>{
  //     //路由独享守卫
  //   alert("还没有登录，请先登录!");
  // }
  },
    {path:'/about',name:"aboutLink",redirect:'/contact',component:About,children:[
      {path:'/contact',name:"contactLink",redirect:'/personname',component:Contact,children:[
        {path:'/personname',name:"PersonName",component:PersonName},
        {path:'/phone',name:"Phone",component:Phone}
      ]},
      {path:'/history',name:"historyLink",component:History},
      {path:'/delivery',name:"deliveryLink",component:Delivery},
      {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
    ]},
    {path:'/login',name:"loginLink",component:Login},
    {path:'/register',name:"registerLink",component:Register},
    {path:'*',redirect:'/'}
  ]
  