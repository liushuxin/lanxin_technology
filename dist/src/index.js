
import React from 'react';
require.ensure([],function(require){
    let asd = require('./testmodule');
    
},"testmodule")
Notification.requestPermission().then((permission) => {
    if(permission = 'granted'){
        console.log("用户允许通知");
    }else if(permission = 'denied'){
        console.log("用户拒绝通知");
    }
    var n = new Notification('状态更新提醒',{ body: '你的朋友圈有3条新状态，快去查看吧', tag: 'linxin', icon: 'http://blog.gdfengshuo.com/images/avatar.jpg', requireInteraction: false })

})
// getComponent().then(component => {
//       console.log(component);
// })
// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ './testmodule').then(tmodule => {
        
        

//         return tmodule;

//     }).catch(error => 'An error occurred while loading the component');
//     }