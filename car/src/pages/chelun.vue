<template>
    <div class='carWheel'>

        <div class="carWheelHeader">
            <span @click="clickEvent('OrderPage')" class='v-if="clickValue===OrderPage"?"tabColor": "" '>订单提交</span>
            <span @click="clickEvent('Address')" class='v-if="clickValue===Address"?"tabColor"": "" '>填写收获地址</span>
            <span @click="clickEvent('Solve')" class='v-if="clickValue===Solve"?"tabColor"": "" '>正在办理</span>
            <span @click="clickEvent('Success')" class='v-if="clickValue===Success"?"tabColor": "" '>办理完成</span>
        </div>

        <div class="carWheelContent">
                <OrderPage :is="clickValue" keep-alive></OrderPage>
        </div>
        

        <div class="carWheelFooter">
                确认
        </div>
 
    </div>
</template>
<script>
    // 将子组件引过来
    import OrderPage from '@/commponents/tabModule/order.vue';
    import Address from '@/commponents/tabModule/address.vue';
    import Solve from '@/commponents/tabModule/solve.vue';
    import Success from '@/commponents/tabModule/success.vue';

    export default {
        // 声明子组件
        components: {
            OrderPage,
            Address,
            Solve,
            Success
        },
        data() {
            return {
                clickValue:Address
            }
        },

        methods: {
            clickEvent(index) {
                this.clickValue = index;
            }
        }
    }
</script>

<style lang='scss' scoped> 
    .carWheel {
        width:100%;
        height:100%;
        overflow: hidden;
        display:-webkit-flex;
        display:flex;
        -webkit-flex-direction:column;
        flex-direction: column;
        background: #F4F4F4;
    }
    // 头部
    .carWheelHeader {
        width:100%;
        height:0.92rem;
        background: #fff;
        display:-webkit-flex;
        display:flex;
        -webkit-align-items:center;
        align-items:center;
        -webkit-justify-content:space-between;
        justify-content:space-between;
        span{
        color:#3AAFFD;
        display:inline-block;
        }
    }
    .carWheelContent {
        width:100%;
        -webkit-flex:1;
        flex:1;
   
    }
    .carWheelFooter {
        width:100%;
        height:0.8rem;
        background: #999999;
        color:#fff;
        text-align: center;
        line-height:0.8rem;
    }
    .tabColor {
        background:red;
    }
</style>