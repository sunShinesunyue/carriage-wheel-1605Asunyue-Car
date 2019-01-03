import JSBridge from '@/utils/JSBridge.js';

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

