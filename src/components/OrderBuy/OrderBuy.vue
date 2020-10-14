<template>
    <div class="orderBuy">
      <div style="position:fixed;width:100%;">
        <mt-header title="" style="background-color:#eee;color:#000;">
            <router-link to slot="left">
              <mt-button icon="back" @click.native="$router.back(-1)"></mt-button>
            </router-link>
        </mt-header>
          <div class="orderHeader">
              <div>默认地址</div>
              <div class="address">
                  <div><span>{{userInfo.user_name}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{userInfo.user_phone}}</span></div>
                  <div>{{userInfo.user_address}}</div>
              </div>
              <div class="addressMore"><i class="mintui mintui-more" style="text-align:right"></i></div>
          </div>
          <div class="orderBuyheader">
              <a href="" class="icon_back"></a>
              <h3>订单</h3>
              <a href="" class="icon_menu"></a>
          </div>
        </div>
        <div class="orderSection">
            <main class="jiuya_shopCart_list">
                <section>
                <div class="shopCart_list_con" v-for="(goods, index) in orderBuyList" :key="index">
                    <div class="list_con_right">
                    <div class="shop_img">
                        <img :src="goods.thumb_url" alt="">
                    </div>
                    <div class="shop_con">
                        <a href="">{{goods.goods_name}}</a>
                        <p class="shop_price">&yen;{{goods.price / 100 }}/1件</p>
                        <div class="shop_deal">
                        <div class="shop_deal_left">
                            <span @click.stop = "isAddBuyNum(goods,false)">-</span>
                            <input type="tel" value="1" v-model="goods.buy_count" disabled="disabled">
                            <span @click.stop = "isAddBuyNum(goods,true)">+</span>
                        </div>
                        </div>  
                    </div>
                    </div>
                </div>
                </section>
            </main>
            <div class="payMethods">
                <mt-radio
                align="right"
                title="支付方式"
                value="1"
                :options="[{
                            label: '微信支付',
                            value: '1'
                          },
                          {
                            label: '支付宝',
                            value: '2'
                          }]">
                </mt-radio>
                <div class="icon"></div>
                <div class="icon"></div>
            </div>
        </div>
        <div class="orderFooter">
            <div>实付款：<span>￥{{total}}</span></div>
            <div><button @click.prevent="setOrder()">立即支付</button></div>
        </div>
        <mt-popup
          v-model="popupVisible"
          position="right"
          style="width:100%;height:100%">
            <div class="popuplist">
              <div class="popupHeader">
                <mt-button  icon="back" @click="popupVisible=false"></mt-button>
                支付成功 
              </div>
              <div class="popupSection">
                <i class="mint-toast-icon mintui mintui-success"></i>
                <span class="mint-toast-text" style="padding-top: 20px;font-size:20px;margin-bottom:50px">订单支付成功</span>
              </div>
              <div class="popupBottom">
                  <router-link :to="{name:'OrderList',params:{selected:4}}"><button>查看订单</button></router-link>
                  <router-link to="/home"><button class="go-home">返回首页</button></router-link>
              </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {MessageBox,Toast,Radio,Cell,Popup,Button} from 'mint-ui';
import {addOrder} from './../../api/index';
export default {
    name:'OrderBuy',
    data(){
        return {
            orderBuyList:[],
            total: 0,
            popupVisible:false
        }
    },
    computed:{
      ...mapState(['userInfo']),     
    },
    created(){
        this.orderBuyList = this.$route.params;
    },
    mounted(){
        this.getGoodsprice()
    },
    methods:{
        getGoodsprice(){//计算总价
            let total = 0;
            this.orderBuyList.forEach((goods,index) => {  
                total += (goods.price / 100 * goods.buy_count);
            });
            this.total = total.toFixed(2);
        }, 
        isAddBuyNum(goods,flag){
            // console.log(goods)   
          if(flag){
              goods.buy_count++;
          } else {
              if(goods.buy_count>1){
                  goods.buy_count--;
              }
          }
      },
       setOrder(){
          MessageBox.confirm('确认付款?').then(async action => {
          // console.log(action);
          if ('confirm' === action) {
            this.popupVisible = true;
            const result = await addOrder(this.orderBuyList);
            
          }
        }).catch();   
      }
    }
}
</script>

<style lang="stylus">
.orderSection
  padding-top: 188px;
.orderHeader
    width 100%
    height 100px
    background-color #fff
    display flex
    align-items center
    >div
        flex 1
        margin-left 20px
    .address
        flex 12
        font-size 14px
        >div
            margin-top 15px
            >span:first-child
                font-size 25px 
.orderBuyheader
      width: 100%;
      height: 30px;
      background: #fff;
      display flex
      justify-content center
      align-items center
      font-size 12px
      font-weight bolder
      color #a99c9c
      z-index 999
      border-top:15px solid #eee
.payMethods
    position relative
    margin-bottom 69px
    .mint-radio-label
        padding-left 15px
    .icon
        position absolute
        top 29px
        left 7px
    .icon:last-child
        position absolute
        top 77px
        left 7px
    .icon::before
            content ""
            display:inline-block
            width 30px
            height 30px
            background url("./../../../static/img/wechat_pay_v1.png") no-repeat
            background-size cover
            vertical-align middle
    .icon:last-child::before
        content ""
        display inline-block
        width 30px
        height 30px
        background url("./../../../static/img/alipay_v1.png") no-repeat
        background-size cover
        vertical-align middle
.jiuya_shopCart_list
      background-color #e0e0e0
      section
        border-top 1px solid #e0e0e0
        background-color #ececec
        .shopCart_list_con
          padding: 10px 0
          border-bottom 1px solid #e0e0e0
          .list_con_left
            .cart_check_box
              float left
              -webkit-background-size 50px 100px
              background-size 50px 100px
              width 20px
              height 20px
              margin-top 17px
              margin-left 7px
            .cart_check_box[checked]
              background-position -25px 0
          .list_con_right
            overflow: hidden;
            padding: 0 7px;
            .shop_img
              float left
              img
                width 80px
                height 80px
                display block
            .shop_con
              overflow hidden
              padding-left 7px
              & > a
                font-size 14px
                color #666
                line-height 20px
                height 40px
                overflow hidden
                display block
                text-decoration none
              .shop_price
                color #E9232C
                margin-top 5px
              .shop_deal
                margin-top 5px
                .shop_deal_left
                  float left
                  & > span
                    border 1px solid #e0e0e0
                    display inline-block
                    width 30px
                    height 25px
                    line-height 25px
                    text-align center
                    float left
                    background-color #fff
                    &:first-child
                      border-top-left-radius 3px
                      border-bottom-left-radius 3px
                    &:last-child
                      border-top-right-radius 3px
                      border-bottom-right-radius 3px
                  input
                    border none
                    border-top 1px solid #e0e0e0
                    border-bottom 1px solid #e0e0e0
                    float left
                    width 50px
                    height 23px
                    text-align center
                .shop_deal_right
                  float right
                  & > span:first-child
                    background-size 18px 4px
                    width 18px
                    height 4px
                    display block
                  & > span:last-child
                    background-size 17px 17px
                    width 17px
                    height 17px
                    display block
                    margin-top -3px
.orderFooter
    position fixed
    bottom 0
    display flex
    height 60px
    width 100%
    background-color #fff
    justify-content space-between
    >div
        flex 1
        height 100%
        line-height 60px
        display flex
        justify-content flex-end
        >span 
            font-size 20px
            color rgba(255, 0, 0, 0.7)
        >button     
            height 100%
            width 60%
            border 1px solid transparent
            outline none
            font-size 21px
            color #fff
            background-color rgba(255, 0, 0, 0.7)
.popuplist
  width 100%
  height 100%
  background-color #eee
  .popupHeader
    width 100%
    height 50px
    line-height 50px
    background-color #f6f8fa
    .mint-button--default
      box-shadow none
      margin-right 32%
  .popupSection
    width 100%
    background-color #eee
    padding 100px 0 200px 0
    box-sizing border-box
    font-size 20px
    color red
  .popupBottom
    width 100%
    text-align center
    button 
      outline none 
      padding 15px 120px
      font-size 20px
      letter-spacing 2px
      color #6a6a6a
      border none
      border-radius 50px
      margin-top 20px
    .go-home
      color #fff
      background-color #fe8954

</style>