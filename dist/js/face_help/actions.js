 export const INCREMENT = "INCREMENT";
 export const DECREMENT = "DECREMENT";
 export const UNDO = "UNDO";
 export const REDO = "REDO";

export  function onIncrement(){
    return {type:INCREMENT};
}
export  function onDecrement(){
    return {type:DECREMENT}
}
export  function onUNDO(){
    return {type:UNDO};
}
export  function onREDO(){
    return {type:REDO}
}