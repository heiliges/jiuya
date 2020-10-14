<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        selectedId: 0, // 选中的id
        items:[
          {label: '热门'},
          {label: '手机'},
          {label: '电脑'},
          {label: '百货'},
          {label: '电器'},
          {label: '食品'},  
          {label: '男装'},
          {label: '内衣'},
          {label: '母婴'}
          
        ],
        options: {
          activeColor: '#e9232c', // 设置选中的颜色
        },
        // 二级路由路径
        subRouteUrl: [
                    '/home/hot', 
                    '/home/phone', 
                    '/home/pc', 
                    '/home/general', 
                    '/home/ele',
                    '/home/food', 
                    '/home/man', 
                    '/home/shirt', 
                    '/home/mbaby']
      }
    },
    methods:{
      handleChange(item, index){
        // console.log(item, index);
        this.$router.replace(this.subRouteUrl[index])
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .home
    background #f5f5f5
    width 100%
    height 100%
    .fix
      position fixed
      left 0
      top 0
      z-index 998
</style>
