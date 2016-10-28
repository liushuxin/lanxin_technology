import React from 'react'; 
import {connect} from 'react-redux'; 
import {addOne,delOne} from './actions'; 
class App extends React.Component{ 
  render(){ 
    return ( 
      <div> 
      <input type="button" onClick={this.props.onAdd} value="addOneItem"/><br/> 
      length:<b>{this.props.length}</b>;datas:<i>{this.props.value}</i><br/> 
      <input type="button" onClick={this.props.onDel} value="delFirst"/> 
       </div> ); 
    }
  } 
  function mapStateToProps(state){ 
    return { 
      value:JSON.stringify(state.datas), length:state.length 
    } 
  } 
  function mapDispatchToProps(dispatch){ 
    return { 
      onAdd:()=>{ let data={id:Math.round(Math.random()*10),text:Math.round(Math.random()*1000000000).toString(16)}; dispatch(addOne(data)); 
      }, 
      onDel:()=>{ dispatch(delOne(0)); } 
    } 
} 
 export default connect(mapStateToProps,mapDispatchToProps)(App);
