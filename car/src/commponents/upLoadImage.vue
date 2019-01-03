<template>
    <div class='IdCardWrapper'>
        <ul class='upLoadUl'>
            <li v-for="(item,index) in list" :key="index" @click="click(index)">
                <img v-if="item.src" :src="item.src">
                <img v-else class="add" :src="addImg">
                <p>{{item.desc}}</p>
            </li>

            <div v-show='showMask' class='mask'>
                <img :src="current.demo">
                <div class='buttonFamily'>
                    <button @click='upLoad(1)'>拍照</button>
                    <button @click='upLoad(2)'>相册</button>
                    <button @click="cancel">取消</button>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>

    import {mapState,mapMutations} from 'vuex'; // 引入辅助属性

    import add from '@/assets/IdCard/add.png';

    import {uploadImg} from '@/api/index'; // 引入封装的那个promise

    export default {
        data() {
            return {
                current:{},
                showMask:false // 遮罩层
            }
        },
        mounted(){
            console.log(this.$store, 'this.$store')
        },
        name: 'Upload',
        computed: { // 计算属性
            ...mapState({
                list:state => state.upLoadImage.list
            }),
            addImg(){
                return add;
            }
        },

        // 方法
        methods:{
            // 将方法弄出来
            ...mapMutations({
                    updataList: 'upLoadImage/upadteList'
            }),

            click(index) { // 打印出点击的那个图片的下标
                this.current = this.list[index]; //  显示当前你点击的那个图片
                this.showMask= true;
            },
            // 点击取消事件
            cancel() {
               this.showMask= false;
            },
            // 拍照，相册
            upLoad(type) {
                uploadImg(type).then(res => {
                    if(res.code == 0) {
                        let src = '';
                        if(/picture.eclicks.cn/.test(res.data.image01)) {
                             src = res.data.image01.replace('http://', '//');
                        } else {
                             src = '//picture.eclicks.cn/' + res.data.image01;
                        }

                        this.updataList({
                            src,
                             index: this.list.findIndex(item=>item==this.current)
                        })
                    } else {
                        alert(res.msg)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
        .upLoadUl {
            width:100%;
            height:auto;
            display:flex;
            flex-direction:space-around;
            text-align: center;
            >li {
                margin:0.2rem;
                .add{
                    border:0.02rem solid #ccc;
                    padding:0.22rem 0.04rem;
                    border-radius:0.2rem;
                }
            }
        }
        .mask {
            position:fixed;
            width:100%;
            height:100%;
            top:0;
            left:0;
            background:rgba(0,0,0,.4);
            display:flex;
            flex-direction: column;
            justify-content:space-around;
        }
        .buttonFamily {
            width:100%;
            height:30%;
            display:flex;
            flex-direction: column;
            >button{
                width:80%;
                height:25%;
                margin-top:0.2rem;
                margin-left:10%;
                border-radius:0.2rem;
                color:#33CCFF;
                font-size:18px;
                background: #333;
                border:none;
            }
        }
</style>
