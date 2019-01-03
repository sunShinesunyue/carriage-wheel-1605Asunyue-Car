<template>
  <div class='wrap'>
    <div class='header'>
      <span class='active'>订单提交</span>
      <span>填写收获地址</span>
      <span>正在办理</span>
      <span>办理完成</span>
    </div>
    <div class='swipe'>
      <!-- <img src='./assets/banner@3x.png'> -->
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download2.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
      </van-swipe>
    </div>

    <div class='IdCard'>
        <UpLoadImage />
    </div>

    <div class='lists'>
      <div class='car_splice'>
        <p>服务类型</p>
        <span @click="mask">换驾照<em>></em></span>
      </div>
      <div>
        <p>当前驾照签发城市</p>
        <input placeholder='请选择签发地' @click='nowCity'/>
      </div>

      <div>
        <p>可补换的签发城市</p>
        <input placeholder='请选择签发地' @click='oldCity'/>
      </div>
      <div class='line'>
        <span>服务费</span>
        <span class='price'>￥399</span>
      </div>
    </div>
    <div class='last'>
        <span>优惠</span>
        <span>></span>
    </div>
    <p class='txt'>常见问题</p>
    <footer>
      <p>实付: <span>￥399</span></p>
      <button>立即支付</button>
    </footer>
      <!-- 当前驾照签发城市 弹出层 -->
      <van-popup v-model="show" position="bottom" :overlay="false" class='nowCityMask'>
            <h3 class='nowCityMaskHead'>
              <span></span>
              <span>当前签发城市</span>
              <span class='sure' @click='sureClick'>确定</span>
            </h3>
            <!-- 弹出层内部的Picker 选择器 -->
          
                <van-picker :columns="columns" @change="onChange" />
     
      </van-popup>

            <!-- 可补换的签发城市 弹出层 -->
      <!-- <van-popup v-model="show" position="bottom" :overlay="false" class='nowCityMask'>
            <h3 class='nowCityMaskHead'>
              <span></span>
              <span>可补换城市</span>
              <span class='sure' @click='sureClick'>确定</span>
            </h3> -->
            <!-- 弹出层内部的Picker 选择器 可补换的签发城市-->
          
                <!-- <van-picker :columns="columns" @change="onChange" /> -->
<!--      
      </van-popup> -->
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions } from 'vuex';

import Vue from 'vue';

import UpLoadImage from '@/commponents/upLoadImage'; // 引入上传图片的组件

export default {
  name: 'app',
    components: {
        UpLoadImage  // 抛出上传图的组件
    },
    data() {
    return {
      show: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  computed:{
    ...mapState({
      num: state => state.app.num
    }),
    ...mapGetters({
      formatNum: 'app/formatNum'
    })
  },
  //()
  // mounted(){
  //   console.log(this.$store, 'this.$store')
  // },
  methods: {
    ...mapMutations({
      changeNum: 'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync: 'app/changeNumAsync'
    }),
    changeNum(type){
      this.changeNumAsync(type).then(res => {
        console.log(type, 'type')
         console.log('异步操作完成')
      })
    },

    mask(){
      JSBridge.invoke('')
    },

    // 当前驾照签发城市 的 点击事件
    nowCity() {
        this.show = true; // 让底部弹出来
    },
    // 弹出层里面的的事件
    onChange() {
      // console.log('lllll')
    },
    // 点击事件
    sureClick() {
        this.show = false; // 让底部隐藏
    },
    // 可补换的签发城市
    // oldCity() {
    //     this.show = true;
    // }
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    color: #3d4145;
  }
  html, body{
    width: 100%;
    height: 100%;
  } 
  .wrap{
    width: 100%;
    height: 100%;
    background: #eee;
  }
  .header{
    width: 100%;
    height:46px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    span{
      font-size: 16px;
      color: #3aaffd;
    }
    .active{
      background: #3aaffd;
      color: #fff;
      // height: 100%;
      &:after{
        content: '';
        display: inline-block;
        position: absolute;
        border-top: .4rem solid #fff;
        border-bottom: .4rem solid #fff;
        border-left: .15rem solid #3aaffd;
        top: 0;
        right: -1rem;
        z-index: 4;
      }
    }
  }
  .car_splice{
    em{
      font-style: normal;
      color: #ccc;
    }
    span{

    }
  }
  .swipe{
    width: 100%;
    height: 100px;
    background: #eee;
    img{
      width: 100%;
      height: 100%;
    }
  }
  // 身份证
  .IdCard {
    height:3rem;
    width:100%;
    display:flex;
    background: #fff;
    align-items: center;
    justify-content: space-around;
    .IdCardChild {
        height:2.8rem;
        // flex:1;
        width:15%;
        text-align: center;
        display:flex;
        flex-direction: column;
        align-items: center;
        .IdCar {
            height:1.36rem;
            width:1.76rem;
            display:inline-block;
            border:0.02rem solid #CACACA;
            border-radius:0.3rem;
            line-height:1.8rem;
          .IdCardCircule{
          width:0.82rem;
          height:0.82rem;
          border:0.02rem solid #848484;
          border-radius:50%;
          text-align: center;
          line-height: 0.82rem;
        }

      }
      .IdFace{
          display:inline-block;
          margin-top:0.36rem;
        }

    }
  }
  .txt{
    width: 100%;
    text-align: center;
    color: #3aaffd;
  }
    // 弹出层的样式
  .nowCityMask {
    // width:100%;
    height:4.8rem;
    background:#EEEEEE;
    .nowCityMaskHead {
      padding:0 0.2rem;
      width:100%;
      height:1rem;
      background: #F7F7F8;
      border:0.02rem solid #D2D4D8;
      display:flex;
      align-items: center;
      justify-content: space-between;
      span{
        color:#6A6F78;
      }
      .sure {
        color:#1C9DED;
      }
    }
  }
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    font-size: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      padding-left: 10px;
      font-size: 16px;
      span{
        color: red;
      }
    }
    button{
      background: #999;
      width: 90px;
      height: 50px;
      border: 0;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .lists{
    border-top: 10px solid #eee;
    width: 100%;
    background: #fff;
    div{
      // width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
      margin-left: 10px;
      padding-right: 10px;
      //font-size: .3rem;
      font-size: 18px;
      .price{
        color: #ff443f;
      }
    }
    input{
      border: 0;
      max-width: 2.6rem;
      text-align: right;
      text-overflow: ellipsis;
      font-size: 14px;
    } 
  }
  .last{
      width: 100%;
      height: 50px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 18px;
      margin-top: 10px;
  }

</style>


