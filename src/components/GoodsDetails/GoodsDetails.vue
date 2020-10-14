<template>
    <div class="goodsdetails">
        <div class="detailsheader">
            <router-link to slot="left" >
                <mt-button icon="back" @click.native="$router.go(-1)" style="padding:0"></mt-button>
            </router-link>
        </div>
        <div class="detailssection">
            <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
            <div class="price">¥<span>{{item.price / 100}}</span></div>
            <h1>{{item.goods_name}}</h1>
            <div class="discounts">
                <div><span>优惠</span> 店铺内满 {{item.price / 20}} 减 {{item.price / 100}}</div>
            </div>
            <div class="promise">
                <div><span>极速退款</span>  ·</div>
                <div><span>全场包邮</span>  ·</div>
                <div><span>7天无理由</span>  ·</div>
                <div><span>48小时发货</span></div>
                <div><i class="mintui mintui-more" style="text-align:right"></i></div>
            </div>
        </div>
        <div class="detailsfooter">
            <div class="more"><span>更多</span></div>
            <div class="collect"><span>收藏</span></div>
            <div class="customer"><span>客服</span></div>
            <div class="buy-btn">
                <button class="item-btn" @click="dealWithCellBtnClick(item)">加入购物车</button>
            </div>
            <div class="buy-btn">
                <button class="item-btn item-buy" @click="showPopup(true)">立即购买</button>
            </div>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom"
            style="width:100%">
            <div class="popupContent">
                <div class="popupHeader">
                    <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
                    <div class="popupHeaderMsg">
                        <div class="price">¥<span>{{item.price / 100}}</span></div>
                        <div>{{item.short_name}}</div>
                    </div>
                </div>
                <div class="popupSection">
                    <div>数量</div>
                    <div>
                        <div @click="isAddBuyNum(false)">-</div>
                            <input type="text" name="" id="" v-model="buyNum" >
                        <div @click="isAddBuyNum(true)">+</div>
                    </div>
                </div>
                <div class="popupfooter">
                    <button class="enterBuy" @click="buyOrder(item)">确定</button>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import {addGoodsToCart,getGoodsMsg} from './../../api/index';
import {Indicator,Toast} from 'mint-ui';
export default {
    name:"GoodsDetails",
    data(){
        return {
            item:{},
            popupVisible:false,
            buyNum:1,
            goods_id:''
        }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created(){
        this.goods_id = this.$route.params.goods_id;
        // console.log(this.$route)
        // console.log(this.goods_id)
        this.getGoodsMsgs(this.goods_id);
    },
    methods:{
        async dealWithCellBtnClick(goods){
         // 1. 发送请求
        // user_id, goods_id, goods_name, thumb_url, price
         let result = await addGoodsToCart(this.userInfo.id, goods.goods_id, goods.goods_name, goods.thumb_url, goods.price);
        //  console.log(result);
        Toast({
              message: '加入购物车成功',
              duration: 1000
            });
      },
      async getGoodsMsgs(goods_id){
          let result = await getGoodsMsg({goods_id});
          if(result.success_code === 200){
              this.item = result.message[0];
            // console.log(result)
          }
      },
      isAddBuyNum(flag){
          if(flag){
              this.buyNum++;
          } else {
              if(this.buyNum>1){
                  this.buyNum--;
              }
          }
      },
      showPopup(flag){
          this.popupVisible = flag;
      },
      buyOrder(goods){
        goods['buy_count'] = this.buyNum;
        let orderGoodsList = [];
        orderGoodsList.push(goods)
        // console.log(orderGoodsList)
        this.$router.push({name:'OrderBuy',params:orderGoodsList})
      }
    }
}
</script>

<style lang="stylus">
.detailsheader
    position fixed
    left 7px
    top 8px
    button
        background-color rgba(0,0,0,0.3)
        border-radius 50%
        width 40px
        height 40px
    .mintui-back:before 
        content "\E600"
        color #fff
        font-size: 35px
.detailssection 
    padding 2px 0px
    background-color #fff
    img 
        height 35%
        border-bottom 1px solid #f1f1f1 
    .price
        color red
        padding 10px 15px
        span  
            font-size 30px
    h1
        padding 0 15px
        height 50px
    .discounts
        width 100%
        display flex
        padding 5px 15px
        border-top 1px solid #f1f1f1
        box-sizing border-box
        div
            height 30px
            line-height 30px
            span
                display inline-block
                width 30px
                height 25px
                font-size 12px
                line-height 25px
                text-align center
                border 1px solid red
                border-radius 5px
                color #fff
                background-color red
                margin-right 5px
            .mintui-more:before
                content: "\E601";
                margin-left 198px
    .promise
        width 100%
        height 30px
        line-height 30px
        display flex
        padding 5px 15px
        border-top 1px solid #f1f1f1
        box-sizing border-box
        div
            flex 1
            font-size 13px 
            .mintui-more:before
                content: "\E601";
                margin-left 70%
.detailsfooter
    width 100%
    height 50px
    display flex
    flex-direction row
    align-items center
    border-top 1px solid #f1f1f1
    position fixed
    bottom 0
    div
        flex 1
        text-align center
        width 60px
    .buy-btn
        flex 2
        height 100% 
    .item-btn
        border none
        height 100%
        width 100%
        font-size 15px
        background-color red
        color #fff
    .item-btn:active
        background-color rgba(255, 0, 0,0.5)
    .item-buy
        background-color rgba(255, 0, 0,0.5)
.popupContent
    width 100%
    height 250px
    background-color #fff
    .popupHeader
        position relative
        img  
            position absolute
            left 25px
            top -50px
            width 150px
            height 150px
            border-radius 10px
    .popupSection
        display flex
        justify-content space-between
        height 50px
        background-color #fff
        padding-left 20px
        >div
            display flex
            align-items center
            >div
                width 35px
                height 30px
                line-height 30px
                text-align center
                background-color #eee
                margin 10px
                font-weight bold
                border-radius 5px
            input  
                width 35px
                padding 5px
                text-align center
                border none
                outline none
    .popupHeaderMsg
        padding 5px 0 0 200px
        background-color #eee
        height 100px
        div
            margin-bottom 10px
            font-size 14px
        .price
            color red
            font-size 25px
    .popupfooter
        display flex
        justify-content center
        position relative
        button
            position fixed
            bottom 0 
            align-items center
            width 100%
            padding 15px 10px
            border 1px solid transparent
            outline none
            font-size 21px
            color #fff
            background-color rgba(255, 0, 0, 0.7)
</style>