<template>
  <div class="me">
    <select-login v-if="!userInfo.id"/>
    <div v-else>
        <me-top />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import SelectLogin from './../../components/Login/SelectLogin';
  import MeTop from './MeTop';

  export default {
    name: "Me",
    computed:{
      ...mapState(['userInfo'])
    },
    components: {
      SelectLogin,
      MeTop
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me
    background #f5f5f5
    width 100%
    height 100%
</style>
