import React,{Component,propTypes} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'dragula/dist/dragula.css';
import dragula from 'dragula';
import IndexSass from '../../sass/index.scss';
class App extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }
  componentDidMount(){
    dragula([document.querySelector('#my1'),document.querySelector('#my2')], {
  isContainer: function (el) {
    return false; // only elements in drake.containers will be taken into account
  },
  moves: function (el, source, handle, sibling) {
    return true; // elements are always draggable by default
  },
  accepts: function (el, target, source, sibling) {
    return true; // elements can be dropped in any of the `containers` by default
  },
  invalid: function (el, handle) {
    return false; // don't prevent any drags from initiating by default
  },
//  direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
  copy: false,                       // elements are moved by default, not copied
  copySortSource: false,             // elements in copy-source containers can be reordered
  revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
  removeOnSpill: false,              // spilling will `.remove` the element, if this is true
  mirrorContainer: document.body,    // set the element that gets mirror elements appended
  ignoreInputTextSelection: true     // allows users to select input text, see details below
});
  }
  render(){
    let self = this;
    return (<div id="dr">
      <div id="my1">
 <div id="d1">
      拖拽1
    </div>
    <div id="d2">
      拖拽2
    </div>
     <div>
      拖拽3
    </div>
     <div>
      拖拽4
    </div>
     <div>
      拖拽5
    </div>
    <span>
       hahahaa
     </span>
     <div>
      拖拽6
    </div>

      </div>
      <div id="my2">
     <span>
       hahah
     </span> 
      </div>
   
    
    </div>);
  }

} 
 ReactDOM.render(<App/>,
 document.getElementById('app'));
