import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  getUserInfo,
  getLogOut,
  getCartsGoods,
  changeGoodsCount,
  delGoodsCount
} from '../api'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  USER_INFO,
  RESET_USER_INFO,
  CART_GOODS_LIST,
  REDUCE_GOODS_COUNT,
  ADD_GOODS_COUNT,
  SELECTED_ALL_GOODS,
  SINGLE_GOODS_SELECTED,
  DEL_SINGLE_GOODS
} from './mutation-types'

export default {
  // 1. 获取首页的轮播图
  async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message})
  },

  // 2. 获取首页的导航
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },

  // 3. 获取首页的商品列表
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list})
  },

  // 4. 获取推荐的商品数据
  async reqRecommendShopList({commit}, params) {

    const result = await getRecommendShopList(params);
    let scb = params.scb;
    let ecb = params.ecb;
    if(result.success_code === 200){
      commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message});
      //  console.log(params.page);页码
      scb && scb (result);}
    else{
      ecb && ecb ('请求失败')
    }
  },

  // 5. 获取搜索的商品数据
  async reqSearchGoods({commit}, callback) {
    const result = await getSearchGoods();
    commit(SEARCH_GOODS, {searchgoods: result.message.data});
    callback && callback();
  },

  // 6. 同步用户的信息
  syncUserInfo({commit}, userInfo) {
    commit(USER_INFO, {userInfo});
  },

  // 7. 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await getUserInfo();
    console.log(result);
    if (result.success_code === 200) {
      commit(USER_INFO, {userInfo: result.message});
    }
  },

  // 8. 退出登录
  async logout({commit}) {
    console.log(111);
    const result = await getLogOut();
    console.log(result);
    if (result.success_code === 200) {
      commit(RESET_USER_INFO);
    }
  },
  //9.购物车
  async reqCartsGoods({commit}) {
    const result = await getCartsGoods();
    if(result.success_code === 200){
      commit(CART_GOODS_LIST, {cartgoods: result.message})
    }
  },
  //10.单个商品的增加和减少
  async updateGoodsCount({commit},{goods,isAdd}){
    let cart_id = goods.cart_id;
    if(isAdd){
        commit(ADD_GOODS_COUNT,{goods});
      }else{
        commit(REDUCE_GOODS_COUNT,{goods});
      } 
    const result = await changeGoodsCount({cart_id,isAdd});
    if(result.success_code === 200){
        
    }
    
  },
  //11.是否选中所有商品
  selectedAll({commit},{isSelected}){
    commit(SELECTED_ALL_GOODS,{isSelected});
  },
  //12.单个商品的选中
  singleGoodsSelected({commit},{goods}){
    commit(SINGLE_GOODS_SELECTED,{goods});
  },
  //13.单个商品的删除
  async delGoodsSingle({commit},{goods}){
    let cart_id = goods.cart_id;
    const result = await delGoodsCount({cart_id});
    if(result.success_code === 200){
      commit(DEL_SINGLE_GOODS,{goods});
    }
  }
}
