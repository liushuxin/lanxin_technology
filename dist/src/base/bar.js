import $ from 'jquery';
var Conthis = (target) =>{
  let addObject = {
    name:12,
    getName:function(){
      return this.name;

    }
  }
  Object.assign(target.prototype, addObject);

}
@Conthis
 class Bar {
    //
    constructor(){
      console.log("Hello World!");
      console.log(module);
      let s = new Set();
      s.add(1);
      s.add("liushuxin");
      console.log(s);
      this.handleAsynFun();

    }
    handleAsynFun(){
      const asyncReadFile = async function () {
        try{
          const f1 = await $.get('/components/getData');
          const f2 = await $.get('/components/getData');
          console.log(f1);
          console.log(f2);

        }catch(e){
          console.error(e);

        }
       
      };
      asyncReadFile();

    }
   
  }
  export default Bar;