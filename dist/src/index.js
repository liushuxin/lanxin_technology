
import React from 'react';
require.ensure([],function(require){
    let asd = require('./testmodule');
    
},"testmodule")
// getComponent().then(component => {
//       console.log(component);
// })
// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ './testmodule').then(tmodule => {
        
        

//         return tmodule;

//     }).catch(error => 'An error occurred while loading the component');
//     }