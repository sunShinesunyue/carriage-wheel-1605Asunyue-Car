<template>
    <div class='carWheel'>

        <div class="carWheelHeader">
            <a href="">订单提交</a>
            <a href="">填写收货地址</a>
            <a href="">正在办理</a>
            <a href="">办理完成</a>
        </div>

        <div class="carWheelContent">
                <div class="carWheelAdress">
                        收获地址
                </div>

                <div class="carWheelInfo">
                        <p>联系省市</p>
                        <p>详细地址</p>
                        <p>联系电话</p>
                        <p>联系人</p>
                </div>
        </div>

        <div class="carWheelFooter">
                确认
        </div>

    </div>
</template>
<script>

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
        height:0.72rem;
        background: #fff;
        display:-webkit-flex;
        display:flex;
        -webkit-align-items:center;
        align-items:center;
        -webkit-justify-content:space-between;
        justify-content:space-between;
        a{
        color:#3AAFFD;
        }
    }
    .carWheelContent {
        width:100%;
        -webkit-flex:1;
        flex:1;
        // 收获地址
        .carWheelAdress {
            width:100%;
            height:0.73rem;
            background: #F4F4F4;
            color:#818181;
            text-align: center;
        }
        // 信息
        .carWheelInfo {
            width:100%;
            height:auto;
            background: #fff;
            >p {
                width:100%;
                height:1.2rem;
                line-height: 1.2rem;
                border-bottom:1px solid #ccc;
            }
        }
    }
    .carWheelFooter {
        width:100%;
        height:0.8rem;
        background: #999999;
        color:#fff;
        text-align: center;
        line-height:0.8rem;
    }
</style>