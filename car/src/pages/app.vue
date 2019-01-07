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
        <!-- <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download2.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item>
        <van-swipe-item><img src='./assets/download.png'/></van-swipe-item> -->
      </van-swipe>
    </div>

    <div class='IdCard'>
        <UpLoadImage />
    </div>

    <div class='lists'>
      <div class='car_splice'>
        <p>服务类型</p>
        <span @click='nowCity' class='typeColor'>{{info.type}}<em>></em></span>
      </div>
      <div>
        <p>当前驾照签发城市</p>
        <!-- <input placeholder='请选择签发地' @click='localCity'/> -->
        <span @click='localCity' class='cityStyle'>{{info.cityName[0]}} {{info.cityName[1]}}</span>
      </div>

      <div>
        <p>可补换的签发城市</p>
        <!-- <input placeholder='请选择签发地'/> -->
        <span @click='chooseCity'>请选择签发地</span>
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
    <!-- 点击跳转事件 -->
    <button @click='otherPage'>点击我跳转</button>
    <footer>
      <p>实付: <span>￥399</span></p>
      <button>立即支付</button>
    </footer>
      <!-- 当前驾照签发城市 弹出层 -->
      <van-popup v-model="show" position="bottom" :overlay="false" class='nowCityMask'>
            <!-- 弹出层内部的Picker 选择器 -->
          
                <van-picker :columns="typeArray" @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>

      </van-popup>

      <!-- 签发城市 -->
      <div>
          <van-popup v-model="showCity" position="bottom" :overlay="false">
              
                    <van-picker :columns="cityArray" @cancel="onCancelCity" show-toolbar title="当前签发城市" @change='changeCity' @confirm="onConfirmCity"/>

          </van-popup>
      </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions } from 'vuex';

import Vue from 'vue';

import UpLoadImage from '@/commponents/upLoadImage'; // 引入上传图片的组件

import {cityList, costList} from '@/api/index'; // 引入请求城市数据的两个方法

export default {
  name: 'app',
    components: {
        UpLoadImage  // 抛出上传图的组件
    },
    data() {
    return {
      show: false,
      showCity:false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      typeArray:["补驾照","换驾照"],
      // 签发城市
      cityList:[],
      cityArray:[],
      info: {
        type:'考驾照',
        city: [],
        cityName:['北京 朝阳']
      }
      
    }
  },
  // 生命周期里面请求数据
  created() {
      this.getCityList(); // 调用请求数据的方法  在生命周期里面
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
    // 请求数据的方法 异步请求数据
    async getCityList() {
        let res = await cityList();
        res.data.forEach(item =>{
          item.list.forEach(value=> {
            delete value.list
          })
        })
        // 赋值
        this.cityList = res.data;

        this.cityArray = [{
          values: this.cityList.map(item =>item.name)
        },{
          values: this.cityList[0].list.map(item=>item.name)
        }]
    },
    ...mapMutations({
      changeNum: 'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync: 'app/changeNumAsync'
    }),
    changeNum(type){
      this.changeNumAsync(type).then(res => {
        console.log(type, 'type')
      })
    },
    mask(){
      JSBridge.invoke('')
    },

    // 当前驾照签发城市 的 点击事件
    nowCity() {
        this.show = true; // 让底部弹出来
    },
    // 点击事件
    cancelClick() {
        this.show = false; // 让底部隐藏
    },
    sureClick() {
      console.log('确认')
    },
    onCancel() {
      this.show = false;
    },
    onConfirm(value) {
        console.log('正在打印驾照的值----',value)
        this.info.type = value;
        this.onCancel(); // 确认完成之后取消
    },
    localCity() {
      this.showCity = true;
    },
    onCancelCity() {
      this.showCity = false;
    },
    changeCity (picker,values) {
      let obj=this.cityList.filter(item=>item.name===values[0]);
      picker.setColumnValues(1,obj[0].list.map(item=>item.name))
    },
    // 确认城市
    onConfirmCity(value) {
      this.info.cityName = value;
      console.log('正在打印渲染出城市的名字',this.cityName)
      this.showCity = false;
    },
    // 最后一个点击城市
    chooseCity() {
      console.log('和每个人相处的方式要不一样')
    },
    // 点击跳转页面事件
    otherPage() {
      this.$router.push({ path: 'rule' });
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
  .typeColor {
    color:#3aaffd;
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
  .cityStyle{
    color:chocolate;
  }

</style>


