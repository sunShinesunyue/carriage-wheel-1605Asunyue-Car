/**
 * 1.专门给上传图片数据
 */
import demo1 from '@/assets/IdCard/id-a.png';
import demo2 from '@/assets/IdCard/id-b.png';
import demo3 from '@/assets/IdCard/licence-a.png';
import demo4 from '@/assets/IdCard/licence-b.png';
import demo5 from '@/assets/IdCard/photo.png';

const state = {
    list: [{
        src:'',
        demo:demo1,
        desc:'身份证正面'
    },
    {
        src:'',
        demo:demo2,
        desc:'身份证反面'
    },
    {
        src:'',
        demo:demo3,
        desc:'驾驶证正业'
    },
    {
        src:'',
        demo:demo4,
        desc:'驾驶证副页'
    },
    {
        src:'',
        demo:demo5,
        desc:'白底半身照'
    }
]
}

const mutations = {
    updateList(state,payload) {
        state.list[payload.index].src = payload.src
    }
}

export default {
    state,
    mutations
}