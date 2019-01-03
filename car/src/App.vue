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
        <van-swipe-item>我是轮播图片</van-swipe-item>
        <van-swipe-item>可是我出不来</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>

    <div class='IdCard'>
        <UpLoadImage />
        <!-- <div class='IdCardChild'>
          <p class='IdCar'>
            <van-uploader :after-read="onRead"  class='IdCardCircule'>
                        +
            </van-uploader>
          </p>  
            <span class='IdFace'>身份证正面</span>
        </div> -->
        <!-- <div class='IdCardChild'>
          <p class='IdCar'>
            <van-uploader :after-read="onRead"  class='IdCardCircule'>
                        +
            </van-uploader>
          </p>  
            <span  class='IdFace'>身份证反面</span>
        </div> -->
        <!-- <div class='IdCardChild'>
          <p class='IdCar'>
            <van-uploader :after-read="onRead"  class='IdCardCircule'>
                        +
            </van-uploader>
          </p>  
            <span  class='IdFace'>驾驶证正页</span>
        </div> -->
        <!-- <div class='IdCardChild'>
            <p class='IdCar'>
              <van-uploader :after-read="onRead"  class='IdCardCircule'>
                          +
              </van-uploader>
            </p>  
            <span  class='IdFace'>身份证副页</span>
        </div> -->
        <!-- <div class='IdCardChild'>
            <p class='IdCar'>
              <van-uploader :after-read="onRead"  class='IdCardCircule'>
                          +
              </van-uploader>
            </p>  
            <span  class='IdFace'>白底半身照</span>
        </div> -->
    </div>

    <div class='lists'>
      <div class='car_splice'>
        <p>服务类型</p>
        <span @click="mask">换驾照<em>></em></span>
      </div>
      <div>
        <p>当前驾照签发城市</p>
        <input placeholder='请选择签发地'/>
      </div>
      <div>
        <p>可补换的签发城市</p>
        <input placeholder='请选择签发地' @click='changeCity()' />
      </div>
      <div class='line'>
        <span>服务费</span>
        <span class='price'>￥399</span>
      </div>
    </div>
      <van-popup v-model="show" position="bottom" :overlay="false" class='bottomMask'>
            内容
      </van-popup>
    <div class='last'>
        <span>优惠</span>
        <span>></span>
    </div>
    <p class='txt'>常见问题</p>
    <footer>
      <p>实付: <span>￥399</span></p>
      <button>立即支付</button>
    </footer>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions } from 'vuex';

import Vue from 'vue';

import { Swipe, SwipeItem ,Uploader,Popup} from 'vant'; // 引入vant的插件

import UpLoadImage from '@/commponents/upLoadImage'; // 引入上传图片的组件

Vue.use(Swipe).use(SwipeItem); // 挂载

Vue.use(Uploader);

Vue.use(Popup);


export default {
  name: 'app',
    components: {
        UpLoadImage  // 抛出上传图的组件
    },
    data() {
    return {
      show: false
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
    changeCity() {
      // <van-popup v-model="show">内容</van-popup>
      console.log('lllllll')
      this.show=!this.show
    }
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
  .bottomMask {
    width:100%;
    height:80%;
    background:rgba(255,255,0,0.3);
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


