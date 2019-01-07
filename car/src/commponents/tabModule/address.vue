<template>
    <div class='addressWraper'>
        <div class='carWheelAdress'>
                收获详情
        </div> 
        <div class='carWheelInfo'> 
            <p>联系省市</p>
            <p>详细地址</p>
            <p>联系电话</p>
            <p>联系人</p>
        </div>

    </div>
</template>
<script>
</script>
<style lang='scss' scoped>
     .carWheelAdress {
            width:100%;
            height:0.73rem;
            background: #F4F4F4;
            color:#818181;
            text-align: center;
        }
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
</style>