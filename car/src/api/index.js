import JSBridge from '@/utils/JSBridge.js';

function sendRequest(url,method = 'GET',data = {}) {
    let params = {
        method
    };

    // 判断如果是一个post请求,带上请求体信息
    if(method == 'POST') {
        params.body = JSON.stringify(data);
    }

    // 判断请求查询url是否勋携带query
    if(url.indexOf('?') == -1) {
        url += `?_=${+new Date()}`
    } else {
        url += `&_=${new Date()}`
    }

    //  拼接登录态token
    // url += `&token=${getToken()}`;
    return fetch(url,params)
    .then(res => res.json())
    .then(body => body)
}


// 上传图片
export let upLoadImg = (type) => {
    return new Promise((resolve,reject) => {
        JSBridge.invoke('device','chooseImage',{
            type,
            chooseCallbackName: function(res) {
                resolve(res)
            }
        })
    })
}

// 唤起分享 分享一些图片 文章 到朋友圈
export let doShare =() => {
    JSBridge.invoke('ui','shareMessage')
}

// 获取驾照签发城市
export let cityList = () => {
    return sendRequest('/api/ExchangeJiaZhao/cityList')
}

// 或缺可换补城市
export let costList = (...params)=>{
  return sendRequest(`/api/ExchangeJiaZhao/getCostList?order_type=${params.type}&city_id=${params.city_id}&province_id=${params.pro_id}`);
} 