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
      let num1 = "233322121213546456456456545646546465464";
      let num2 = "65654654323423432423424324243242342432432";
      console.log(this.bigDataAdd(num1, num2)) ;
      console.log(this.bigDataAddExtra(num1, num2));
      

    }
    /**
     * 大数相加
     * @param {*} a 
     * @param {*} b 
     */
    bigDataAdd(a,b){
        var arrA = a.split('').reverse();
        var arrB = b.split('').reverse();
        var sum = 0,
          left = 0,
          offset = 0,
          overFlow = 0,
          arrSum = [],
          maxLen = Math.max(arrA.length, arrB.length);
        for (var i = 0; i < maxLen; i++) {
          sum = overFlow;
          if (i < arrA.length) {
            sum = sum + Number(arrA[i]);
          }
          if (i < arrB.length) {
            sum = sum + Number(arrB[i]);
          }
          left = sum % 10;
          arrSum[i] = left;
          overFlow = Math.floor(sum / 10);
        }
        if (offset !== 0) {
          arrSum[i + 1] = overFlow;
        }
        return arrSum.reverse().join('');

    }
    bigDataAddExtra(a,b){
      let first = a.split('').reverse();
      let second = b.split('').reverse();
      let len = Math.max(first.length, second.length);
      let sumArr = [];
      let offSet = 0;
      for (let i = 0;i < len ;i++){
        let sum = offSet;
        if (first[i]){
          sum += parseInt(first[i]);
        }
        if (second[i]){
          sum += parseInt(second[i]);
        }
        offSet = Math.floor(sum/10);
        sum = sum%10;
        sumArr.push(sum);
      }
      if (offSet === 1){
        sumArr.push(1);
      }
      return (sumArr.reverse().join(""));
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