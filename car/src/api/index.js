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

