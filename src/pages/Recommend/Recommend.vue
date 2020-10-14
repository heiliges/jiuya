<template>
  <scroll class="scroller" :upCallback="upCallback" ref="mescroll" warpId="index_scroll"
          id="index_scroll"  >
      <div class="recommend">
        <shop-list
          v-for="(item, index) in recommendshoplist"
          :item=item
          :key="index"
          :clickCellBtn="dealWithCellBtnClick"
        />
      </div>
  </scroll>
</template>

<script>
  import {mapState} from 'vuex';
  import ShopList from './../../components/ShopList/ShopList';
  import {addGoodsToCart} from './../../api/index';
  import {Indicator,Toast} from 'mint-ui';
  import Scroll from './../../components/mescroll/Scroll';
  export default {
    name: "Recommend",
    computed: {
      ...mapState(['recommendshoplist','userInfo'])
    },
    components:{
      ShopList,
      Scroll
    },
    methods: {
      dealWithCellBtnClick(goods_id){
        console.log(goods_id);
      },
      upCallback(page){
        const SIZE = 10;
        this.$store.dispatch('reqRecommendShopList', {
          'page': (page.num++-1) * SIZE,
          'count': SIZE,
          'scb': (result)=>{
              this.$refs.mescroll.endSuccess(result.length); 
              
          },
          'ecb': (err)=>{
              this.$refs.mescroll.endErr();
          }
        });
      },
        //1.4 加入购物车
      async dealWithCellBtnClick(goods){
         // 1. 发送请求
        // user_id, goods_id, goods_name, thumb_url, price
         let result = await addGoodsToCart(this.userInfo.id, goods.goods_id, goods.goods_name, goods.thumb_url, goods.price);
        //  console.log(result);
        Toast({
              message: '加入购物车',
              duration: 1000
            });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .scroller
    padding-bottom 5rem
    .recommend
      display flex
      flex-direction row
      flex-wrap wrap
      background-color: #f5f5f5;
</style>
