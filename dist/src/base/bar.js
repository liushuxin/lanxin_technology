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
      s.set(1);
      s.set("liushuxin");
      console.log(s);

    }
   
  }
  export default Bar;