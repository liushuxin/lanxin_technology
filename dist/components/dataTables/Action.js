export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO'
export const QUERY_TODO = 'QUERY_TODO'
/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function setQueryParam(queryText) {
  return { type: UPDATE_TODO, queryText:queryText }
}

export function QueryData(data) {
  return { type: QUERY_TODO, data:data}
}
export function AjaxGetData(){
  
}