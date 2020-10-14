<template>
    <div class="order-list">
        <mt-header title="订单列表" style="width:100%;background-color:#fff;color:#000;position:fixed;top:0;z-index:999;">
            <router-link to="/me" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>    
        <mt-navbar v-model="selected" style="width:100%;background-color:#fff;color:#000;position:fixed;top:38px;z-index:999;">
            <mt-tab-item id="4">全部订单</mt-tab-item>
            <mt-tab-item id="0">待发货</mt-tab-item>
            <mt-tab-item id="1">待收货</mt-tab-item>
            <mt-tab-item id="2">已完成</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="4" >
                <mt-cell v-for="(order,index) in listAll" :key="index" class="order-msg" >
                    <div class="order-img">
                        <h1>九雅商城</h1>
                        <img :src="order.thumb_url" alt="">
                    </div>
                    <div class="order-con">
                        <div class="details">
                            <p>{{order.goods_name}}</p>
                            <div>
                                <span>￥<span>{{Number(order.price*order.buy_count /100).toFixed(2)}}</span></span>
                                <span>共{{order.buy_count}}件</span>
                            </div>
                        </div>
                        <div class="state">
                            <div>
                                <mt-badge size="large" color="rgb(183, 183, 183)" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-if="order.state === 0">未发货</mt-badge>
                                <mt-button type="primary" size="small" @click.prevent="updateOrderStates(order)" v-else-if="order.state === 1">确认收货</mt-button>
                                <mt-badge size="large" type="success" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-else-if="order.state === 2">已完成</mt-badge>
                            </div>
                        </div>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="0">
                <mt-cell v-for="(order,index) in sendList" :key="index" class="order-msg" >
                    <div class="order-img">
                        <h1>九雅商城</h1>
                        <img :src="order.thumb_url" alt="">
                    </div>
                    <div class="order-con">
                        <div class="details">
                            <p>{{order.goods_name}}</p>
                            <div>
                                <span>￥<span>{{Number(order.price*order.buy_count /100).toFixed(2)}}</span></span>
                                <span>共{{order.buy_count}}件</span>
                            </div>
                        </div>
                        <div class="state">
                            <div>
                                <mt-badge size="large" color="rgb(183, 183, 183)" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-if="order.state === 0">未发货</mt-badge>
                                <mt-button type="primary" size="small" @click.prevent="updateOrderStates(order)" v-else-if="order.state === 1">确认收货</mt-button>
                                <mt-badge size="large" type="success" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-else-if="order.state === 2">已完成</mt-badge>
                            </div>
                        </div>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="1">
                <mt-cell v-for="(order,index) in harvestList" :key="index" class="order-msg" >
                    <div class="order-img">
                        <h1>九雅商城</h1>
                        <img :src="order.thumb_url" alt="">
                    </div>
                    <div class="order-con">
                        <div class="details">
                            <p>{{order.goods_name}}</p>
                            <div>
                                <span>￥<span>{{Number(order.price*order.buy_count /100).toFixed(2)}}</span></span>
                                <span>共{{order.buy_count}}件</span>
                            </div>
                        </div>
                        <div class="state">
                            <div>
                                <mt-badge size="large" color="rgb(183, 183, 183)" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-if="order.state === 0">未发货</mt-badge>
                                <mt-button type="primary" size="small" @click.prevent="updateOrderStates(order)" v-else-if="order.state === 1">确认收货</mt-button>
                                <mt-badge size="large" type="success" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-else-if="order.state === 2">已完成</mt-badge>
                            </div>
                        </div>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="(order,index) in finishList" :key="index" class="order-msg" >
                    <div class="order-img">
                        <h1>九雅商城</h1>
                        <img :src="order.thumb_url" alt="">
                    </div>
                    <div class="order-con">
                        <div class="details">
                            <p>{{order.goods_name}}</p>
                            <div>
                                <span>￥<span>{{Number(order.price*order.buy_count /100).toFixed(2)}}</span></span>
                                <span>共{{order.buy_count}}件</span>
                            </div>
                        </div>
                        <div class="state">
                            <div>
                                <mt-badge size="large" color="rgb(183, 183, 183)" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-if="order.state === 0">未发货</mt-badge>
                                <mt-button type="primary" size="small" @click.prevent="updateOrderStates(order)" v-else-if="order.state === 1">确认收货</mt-button>
                                <mt-badge size="large" type="success" style="margin-top:6px;font-size: 100%;width:60px;height:25px;line-height:25px" v-else-if="order.state === 2">已完成</mt-badge>
                            </div>
                        </div>
                    </div>
                </mt-cell>
            </mt-tab-container-item>
        </mt-tab-container> 
    </div>
</template>
<script>
import {mapState} from 'vuex';
import {getOrderList, updateOrderState} from './../../api/index';
import { Navbar,TabItem,MessageBox,Toast } from 'mint-ui';
export default {
    name:'OrderList',
    data() {
        return {
            selected: ''+this.$route.params.selected,
            listAll:[],
            sendList:[],
            harvestList:[],
            finishList:[]
        };  
    },
    created(){
        // console.log(this.$route.params.selected);
        // this.getOrderLists();
        this.getOrderLists();
        
    },
    methods:{
        async getOrderLists(){//获取订单列表
            const result = await getOrderList();
            if(result.success_code === 200){
                this.sendList = [];
                this.harvestList = [];
                this.listAll = [];
                this.finishList = [];
                this.listAll = result.message;
                this.listAll.forEach((order,index)=>{
                    switch(order.state){
                        case 0 :this.sendList.push(order);break;
                        case 1 :this.harvestList.push(order);break;
                        case 2 :this.finishList.push(order);break;
                        default :;break;
                    }
                });
                // console.log(this.listAll);
                // console.log(this.sendList);
                // console.log(this.harvestList);
                // console.log(this.finishList);
            }
        },
        async updateOrderStates(order){
            MessageBox.confirm('确认收货?').then(async action => {
          // console.log(action);
          if ('confirm' === action) {
            let result = await updateOrderState(order);
            if(result.success_code === 200){
                // location.reload();
                // this.$router.push({name:'OrderList',params:{selected:this.selected}});
                this.getOrderLists();
                Toast({
                    message: result.message,
                    duration: 1000
                });
            }
          }
        }).catch();
        },
    }
}
</script>

<style lang="stylus">

.mint-tab-container-item
    margin-top 97px
    background-color #eee
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: 0; 
}  
.order-list
    background-color #eee
    .order-msg
        margin-bottom 10px
        height 180px
        display flex
        border-radius 10px
        .order-img
            border-radius 7px
            margin-right 10px
            position relative
            h1
                position absolute
                top -27px
            img
                width 100px
                height 100px
                border-radius 7px
                background-size cover 
        .order-con
            height 150px
            display flex
            align-items center
            position relative
            .details
                width 100%
                display flex
                justify-content space-between
                p
                    max-width 70%
                    color #504a4a
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    line-clamp: 3;
                    -webkit-box-orient: vertical;
                div
                    display flex
                    flex-direction column
                    justify-content space-between
                    text-align right
                    span:first-child
                        color #504a4a
                        font-size 14px
                        & >span
                            color #504a4a
                            font-size 16px
                    span:nth-child(2)
                        font-size 12px
            .state
                position absolute
                left 160px
                top 120px








</style>