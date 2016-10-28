export const ADD = 'ADD';
export const DEL = 'DEL';
export function addOne(data) {
  return { 
    type: ADD, 
    payload: data 
  }
} 
export function delOne(ins) {
  return { 
    type: DEL, 
    index: ins 
  }
}
