import ajax from './ajax'

// 1. 基础路径
const BASE_URL = '/api';
// const BASE_URL = 'http://localhost:3000';

// 2. 请求方法

// 2.1 请求首页的轮播图
export const getHomeCasual = ()=>ajax(BASE_URL + '/api/homecasual');

// 2.2 请求首页的导航
export const getHomeNav = ()=>ajax(BASE_URL + '/api/homenav');

// 2.3 请求首页的商品数据
export const getHomeShopList = ()=>ajax(BASE_URL + '/api/homeshoplist');

// 2.4 请求推荐的商品数据
export const getRecommendShopList = (params)=>ajax(BASE_URL + '/api/recommendshoplist', params);

// 2.5 请求搜索的列表数据
export const getSearchGoods = ()=>ajax(BASE_URL + '/api/searchgoods');

// 2.6 请求短信验证码
export const getPhoneCode = (phone)=>ajax(BASE_URL + '/api/send_code', {phone});

// 2.7 手机验证码登录
export const phoneCodeLogin = (phone, code)=>ajax(BASE_URL + '/api/login_code', {phone, code}, 'POST');

// 2.8 用户名和密码登录
export const pwdLogin = (name, pwd, captcha)=>ajax(BASE_URL + '/api/login_pwd', {name, pwd, captcha}, 'POST');

// 2.9 获取登录的用户信息
export const getUserInfo = ()=>ajax(BASE_URL + '/api/user_info');

// 2.10 退出登录
export const getLogOut = ()=>ajax(BASE_URL + '/api/logout');
// 2.11 请求购物车数据
export const getCartsGoods = ()=>ajax(BASE_URL + '/api/cart_goods')
// 2.12 加入购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, thumb_url, price) => ajax(BASE_URL + '/api/add_shop_cart', {user_id, goods_id, goods_name, thumb_url, price}, 'POST');

// 2.13 修改用户信息
export const changeUserInfo = (user_id, user_name, user_sex, user_address, user_birthday, user_sign) => ajax(BASE_URL + '/api/change_user_msg', {
    user_id,
    user_name,
    user_sex,
    user_address,
    user_birthday,
    user_sign
  }, 'POST');
// 2.14 修改购物车
export const changeGoodsCount = ({cart_id,isAdd}) =>ajax(BASE_URL+'/api/changegoodscount',{cart_id,isAdd},'POST');
// 2.15 删除购物车
export const delGoodsCount = ({cart_id}) =>ajax(BASE_URL+'/api/delgoodscount',{cart_id},'POST');
// 2.16 搜索商品
export const getSearchList = (params)=>ajax(BASE_URL+'/api/searchshoplist',params);
// 2.16 添加订单
export const addOrder = (params)=>ajax(BASE_URL+'/api/addorder',params,'POST');
// 2.17 获取单个商品信息
export const getGoodsMsg = (params)=>ajax(BASE_URL+'/api/getgoodsmsg',params,'POST');
// 2.18 获取订单列表
export const getOrderList = ()=>ajax(BASE_URL + '/api/getorderlist');
// 2.19 确认收货
export const updateOrderState= (params)=>ajax(BASE_URL+'/api/updateorderstate',params,'POST');