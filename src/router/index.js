// 1. 引入对应模块
import Vue from 'vue'
import VueRouter  from 'vue-router'
//一级路由
// import Home from './../pages/Home/Home'
// import Recommend from './../pages/Recommend/Recommend'
// import Search from './../pages/Search/Search'
// import Chat from './../pages/Chat/Chat'
// import Me from './../pages/Me/Me'
// import Login from './../components/Login/Login'
//路由懒加载
const Home = ()=>import('./../pages/Home/Home');
const Recommend = ()=>import('./../pages/Recommend/Recommend');
const Search = ()=>import('./../pages/Search/Search');
const Chat = ()=>import('./../pages/Chat/Chat');
const Me = ()=>import('./../pages/Me/Me');
const Login = ()=>import('./../components/Login/Login');

import Hot from '../pages/Home/Children/Hot/Hot'
import PC from './../pages/Home/Children/PC'
import Phone from './../pages/Home/Children/Phone'
import Ele from './../pages/Home/Children/Ele'
import Food from './../pages/Home/Children/Food'
import General from './../pages/Home/Children/General'
import Man from './../pages/Home/Children/Man'
import Mbaby from './../pages/Home/Children/Mbaby'
import Shirt from './../pages/Home/Children/Shirt'

import Mesetting from './../pages/Me/MeSetting'
import MeDetail from './../pages/Me/MeDetail'
import GoodsDetails from './../components/GoodsDetails/GoodsDetails'
import OrderBuy from './../components/OrderBuy/OrderBuy'
import OrderList from './../components/OrderBuy/OrderList'
// 2. 声明使用
Vue.use(VueRouter);

// 3. 输出路由对象
export default  new VueRouter({
    // 3.1 配置一级路由
    routes: [
      {
        path: '/home',
        component: Home,
        children: [
          // 热门版块
          {path: 'hot', component: Hot,  meta: {showTabBar: true}},
          // 手机版块
          {path: 'phone', component: Phone,  meta: {showTabBar: true}},
          // 电脑版块
          {path: 'pc', component: PC,  meta: {showTabBar: true}},
          // 母婴版块
          {path: 'mbaby', component: Mbaby,  meta: {showTabBar: true}},
          // 百货版块
          {path: 'general', component: General,  meta: {showTabBar: true}},
          // 食品版块
          {path: 'food', component: Food,  meta: {showTabBar: true}},
          // 内衣版块
          {path: 'shirt', component: Shirt,  meta: {showTabBar: true}},
          // 男装版块
          {path: 'man', component: Man,  meta: {showTabBar: true}},
          // 电器版块
          {path: 'ele', component: Ele,  meta: {showTabBar: true}},
          {path: '/home',redirect: '/home/hot'}
        ]
      },
      {
        path: '/recommend',
        component: Recommend,
        meta: {showTabBar: true}
      },
      {
        path: '/search',
        component: Search,
        meta: {showTabBar: true}
      },
      {
        path: '/chat',
        component: Chat,
        meta: {showTabBar: true}
      },
      {
        path: '/me',
        component: Me,
        meta: {showTabBar: true}
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/setting',
        component: Mesetting,
      },
      {
        path: '/medetail',
        component: MeDetail,
      },
      {
        path: '/goodsdetails/:goods_id',
        name:'GoodsDetails',
        component: GoodsDetails,
      },
      {
        path: '/orderbuy',
        name:'OrderBuy',
        component: OrderBuy,
      },
      {
        path: '/orderlist/:selected',
        name:'OrderList',
        component: OrderList,
      },
      {
        path: '/',
        redirect: '/home'
      },
    ]
});
