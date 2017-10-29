
import React from 'react';

        require.ensure([],function(require){
            let Hello = require('./testmodule.js');
        },"testmodule")
        if (module.hot) {
            console.log("启用HMR");
          }
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

