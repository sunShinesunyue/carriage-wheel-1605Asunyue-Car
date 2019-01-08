<template>
    <div>
        <div class="carWheelAdress">
                <button @click='shareMy'>点击分享</button>
        </div>

        <div class="carWheelInfo">
           
        </div>
    </div>
</template>
<script>
    import {doShare} from '@/api/index'; // 引入
    export default {
        created() {
            window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
                title:'分享我命运中的男神',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546922118015&di=2798cecb0153f09d40aedd699d9b2824&imgtype=0&src=http%3A%2F%2F02imgmini.eastday.com%2Fmobile%2F20180826%2F20180826083820_59076636c3e670a2d38d9bbd2ea96b0c_1.jpegz',
                type:'photo'
            },
            // 分享到会话
            window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
                title:'潘依然是我见过最好的女孩',
                desc:"微信分享男神张杰",
                link:'https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN',
                imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546922118015&di=2798cecb0153f09d40aedd699d9b2824&imgtype=0&src=http%3A%2F%2F02imgmini.eastday.com%2Fmobile%2F20180826%2F20180826083820_59076636c3e670a2d38d9bbd2ea96b0c_1.jpeg'
            }
        },
        methods:{
            // 分享
            shareMy() {
                doShare() // 调用这个方法
                console.log('分享成功')
            }
        }
    }
</script>
<style lang='scss' scoped>

</style>