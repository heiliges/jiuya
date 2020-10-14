<template>
  <div class="me-setting">
    <mt-header title="设置">
      <router-link to="/me" slot="left">
      <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <me-common-cell left-icon="itlike-3" left-title="免密支付设置"/>
      <me-common-cell left-icon="itlike-2" left-title="隐私设置" :clickCell="dealClickCell" right-title-color="red"/>
      <me-common-cell left-icon="itlike-4" left-title="通用" />
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-1" left-title="常见问题" />
      <me-common-cell left-icon="itlike-1" left-title="关于我们" />
    </div>

    <div style="margin-top: 10px">
      <me-common-cell left-icon="itlike-1" left-title="意见反馈"/>
    </div>

    <div class="logout" @click="dealLogout">退出登录</div>
  </div>
</template>

<script>
  import MeCommonCell from './MeCommonCell';
  import {Toast, MessageBox,Switch} from 'mint-ui';
  import {mapActions} from 'vuex';
  export default {
    name: "MeSetting",
    components: {
      MeCommonCell
    },
    methods: {
      ...mapActions(["logout"]),
      dealClickCell(props) {
        Toast('点击了' + props);
      },
      dealLogout() {
        // console.error(111);
        MessageBox.confirm('您确定退出吗?').then(action => {
          // console.log(action);
          if ('confirm' === action) {
            this.logout({});
            // 回到主界面
            this.$router.replace('/home');
          }
        });
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .me-setting
    width 100%
    height 100%
    background-color #ececec
    .logout
      height 40px
      line-height 40px
      background-color #fff
      margin-top 20px
      text-align center
</style>
