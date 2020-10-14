<template>
  <a class="recommend-item">
    <router-link tag="div" :to="{ name:'GoodsDetails', params:{goods_id:item.goods_id}}" >
      <img :src="item.thumb_url" alt="" width="100%" v-if="item.thumb_url">
      <h4 class="item-title">{{item.short_name}}</h4>
    </router-link>
    <div class="item-bottom">
      <span class="item-price">¥{{item.price / 100}}</span>
      <button class="item-btn" @click="clickCellBtn(item)">加入购物车</button>
    </div>
  </a>
</template>

<script>
  export default {
    name: "ShopList",
    props: {
      item: Object,
      clickCellBtn: {
         type: Function,
         default: ()=>{}
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .recommend-item:nth-child(2n-1)
    margin-right 1%

  .recommend-item
    width 49.5%
    background #FFF
    padding-bottom 15px
    margin-bottom 15px
    .item-title
      line-height 20px
      font-size 13px
      font-weight lighter
      height 20px
      overflow hidden
      margin 5px 0
      padding 0 5px
    .item-bottom
      display flex
      flex-direction row
      align-items center
      padding 0 6px
      .item-price
        flex 2
        color red
        font-weight bolder
        font-size 12px
      .item-sales
        flex 4
        font-size 10px
        color #666666
      .item-btn
        flex 2
        border 1px solid orangered
        height 26px
        border-radius 5px
        font-size 10px
        background-color transparent
        color red
</style>
