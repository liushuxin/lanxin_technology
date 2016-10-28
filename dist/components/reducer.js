import {ADD,DEL} from './actions'; 
const initDatasState={datas:[],length:0}; 
export function reducer(state=initDatasState,action){ 
  switch (action.type) { 
    case ADD: return {
      datas:[...state.datas,action.payload],length:state.length+1};
       case DEL: 
       if (state.length<=0) { return state; } 
       state.datas.forEach((a,i)=>{ 
         i==action.index&&state.datas.splice(i,1); 
        }); 
       return {datas:state.datas,length:state.length-1}; 
       default: return state; 
      } 
  }
