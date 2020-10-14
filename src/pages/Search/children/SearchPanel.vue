<template>
  <div class="search-panel">
    <div class="search-nav">
      <div class="search-input">
        <img src="../images/search.png" alt="" width="25"/>
        <input ref="mySearch" type="search" placeholder="九雅商城" 
          v-model="keyWord" 
          @keyup.enter="searchShow"
          />
      </div>
      <button @click="showSearchPanel(false)">取消</button>
    </div> 
    <search-list v-if="isShowList" :keyWord="keyWord" class="searchlistall"/>
    <div class="search-content" v-else>
       <div class="title">
         <img src="../images/hot.png" alt="" width="25">
         <span>热门搜索</span>
       </div>
       <ul class="search-list">
         <li>华为P40</li>
         <li>一加8pro</li>
         <li>小米10</li>
         <li>N95口罩</li>
         <li>纸张</li>
         <li>防护服</li>
       </ul>
    </div>
  </div>
</template>

<script>
import {Indicator,Toast} from 'mint-ui';
import SearchList from './SearchList';
  export default {
    name: "SearchPanel",
    data(){
      return{
        searchLists:{},
        keyWord:'',
        isShowList: false
      }
    },
    components:{
      SearchList
    },
    props:{
      showSearchPanel: Function
    },
    mounted(){
       this.$refs.mySearch.focus()
    },
    methods: {
     searchShow(){
        let keyWord = this.keyWord;
        if(!keyWord){
          Toast({
            message: '请输入搜索词',
            duration: 800,
            position:'top'
          });
        }else{
          this.showSearchList(false);
          setTimeout(()=>{
            this.showSearchList(true);
          },50)
         
        }
      },
      showSearchList(flag){
          this.isShowList = flag;
      }
    },
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .search-panel
    width 100%
    height 100%
    background-color #fff
    position fixed
    left 0
    top 0
    z-index 1000
    .searchlistall
      width 100%
      height 100%
      overflow scroll
    .search-nav
      width 100%
      height 60px
      border-bottom-1px(#dddddd)
      padding 0 20px
      display flex
      flex-direction row
      align-items center
      justify-content space-between
      .search-input
        display flex
        flex-direction row
        align-items center
        width 85%
        height 38px
        border-radius 5px
        background-color #ededed
        padding 0 10px
        input
           background-color transparent
           width 90%
           height 90%
           padding-left 10px
           color #aaa
           font-size 16px
           outline none
      button
        background-color transparent
        font-size 16px
        color #aaa
    .search-content
       padding 30px 15px
       .title
          display flex
          flex-direction row
          align-items center
          color #aaa
          margin-bottom 10px
       .search-list
          display flex
          flex-direction row
          flex-wrap wrap
          li
            background-color: #ededed
            color #aaa
            margin 5px 15px
            padding 5px 5px
            border-radius 10px
</style>
