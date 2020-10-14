<template>
  <div class="me-top">
    <router-link tag="div" class="user" to="/MeDetail" >
      <img src="./images/me_icon.png" alt="">
      <p>{{userInfo.user_name}}</p>
      <i class="itlike-3"></i>
    </router-link>
    <div class="my-older">
      <div class="older-top">
        <h3>我的订单</h3>
        <router-link tag="span" :to="{name:'OrderList',params:{selected:4}}"><span>查看全部 > </span></router-link>
      </div>
      <div class="older-bottom">
        <router-link :to="{name:'OrderList',params:{selected:0}}" tag="div" class="bottom-item">
          <i class="itlike-1"></i>
          <span>待发货</span>
        </router-link>
        <router-link :to="{name:'OrderList',params:{selected:1}}" tag="div" class="bottom-item">
              <i class="itlike-3"></i>
              <span>待收货</span>
        </router-link>
        <router-link :to="{name:'OrderList',params:{selected:2}}" tag="div" class="bottom-item">
          <i class="itlike-5"></i>
          <span>已完成</span>
        </router-link>
        <div class="bottom-item">
          <i class="itlike-2"></i>
          <span>待分享</span>
        </div>
      </div>
    </div>
    <div class="setting">
      <div class="setting-item">
        <i class="itlike-1"></i>
        <span>新人红包</span>
      </div>
      <div class="setting-item">
        <i class="itlike-2"></i>
        <span>活动中心</span>
      </div>
      <div class="setting-item">
        <i class="itlike-3"></i>
        <span>领流量</span>
      </div>
      <div class="setting-item">
        <i class="itlike-4"></i>
        <span>边逛边赚</span>
      </div>
      <div class="setting-item">
        <i class="itlike-5"></i>
        <span>红包</span>
      </div>
      <div class="setting-item">
        <i class="itlike-uniE902"></i>
        <span>新品试用</span>
      </div>
      <div class="setting-item">
        <i class="itlike-1"></i>
        <span>我的口令</span>
      </div>
      <div class="setting-item">
        <i class="itlike-3"></i>
        <span>官方客服</span>
      </div>
      <router-link tag="div" class="setting-item" to="/setting">
        <i class="itlike-4"></i>
        <span>设置</span>
      </router-link>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "MeTop",
        computed:{
          ...mapState(["userInfo"])
        },
        filters:{
           phoneFormat(phone){
              // 1. 转成数组
             let phoneArr = [...phone];
             // console.log(phoneArr);
             let str = '';
             phoneArr.forEach((item, index)=>{
                if(index === 3 || index === 4 || index === 5 || index === 6){
                    str += '*'
                }else {
                   str += item;
                }
             });
             return str
           }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-top
    font-size 14px
    .user
      display flex
      flex-direction row
      align-items center
      padding 20px
      background-color #fff
      margin-bottom 10px
      p
        margin 0 10px
      img
        width 60px
        height 60px
        border-radius 50%
      i
        font-size 25px
    .my-older
      background-color #fff
      .older-top
        display flex
        flex-direction row
        padding 0 10px
        justify-content space-between
        height 44px
        line-height 44px
      .older-bottom
        display flex
        .bottom-item
          flex 1
          height 60px
          display flex
          flex-direction column
          justify-content center
          align-items center
          i
            font-size 30px
            color #E9232C
            margin-bottom 5px
    .setting
      margin-top 10px
      background-color #fff
      display flex
      justify-content space-between
      flex-wrap wrap
      .setting-item
        width 90px
        height 70px
        display flex
        flex-direction column
        justify-content center
        align-items center
        i
          font-size 30px
          color orange
          margin-bottom 5px
</style>
