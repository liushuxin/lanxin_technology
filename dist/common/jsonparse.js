export default function json_parse(){
    //这是一个能把JSON 字符串转化为javascript数据结构的函数
    //他是一个简单的递归降序的解析器
    var at ,//当前字符索引
    ch, //当前字符
    escapee = {
        '"': '"',
        '\\':'\\',
        '/':'/',
        b:'b',
        f:'\f',
        n:'\n',
        r:'\r',
        t:'\t'
    },
    text,
    //当某处出错时，调用error
    error = (m) => {
        throw {
            name:"SyntaxError",
            message:m,
            at:at,
            text:text
        };


    },
    next = (c) => {
        //如果提供了参数c,那么检测它是否匹配当前字符
        if(c && c !== ch){
            error("Expected'"+c+"' instead of '"+ch+"'");
        }
        //获取下一个字符，当没有下一个字符时返回空字符串
        ch = text.charAt(at);
        at +=1;
        return ch;

    },
    number =() =>{
        //解析一个数字值
        var number,
        string = "";
        if(ch === "-") {
            string = "-";
            next("-");
        }
        while(ch >= '0' && ch <= "9"){
            string +=ch;
            next();
        }
        if(ch === "."){
            string +=".";
            while(next() && ch >="0" &&ch <="9"){
                string += ch;
            }
        }
        if(ch === "e" ||ch ==="E"){
            string +=ch;
            next();
            if(ch === "-" ||ch ==="+"){
                string +=ch;
                next();
            }
            while(ch >="0" && ch<="9"){
                string += ch;
                next();
            }
        }
        number =+ string;
        if(isNaN(number)){
            error("Bad Number");
        }else{
            return number;
        }
    },
    string = ()=>{
        var hex,
        i,
        string,
        uffff;
        //当解析字符串值时，我们必须找到“和\.
        if(ch ==='"'){
            while(next()){
                if(ch ==='"'){
                    next();
                    return string;
                }else if(ch === '\\'){
                    next();
                    if(ch === 'u'){
                        uffff = 0;
                        for(let i=0;i<4;i++){
                            hex = parseInt(next(),16);
                            if(!isFinate(hex)){
                                break;
                            }
                            uffff = uffff *16 +hex;
                        }
                        string += String.fromCharCode(uffff);
                    }else if(typeof escapee[ch] === 'string'){
                        string += escapee[ch];

                    }else{
                        break;
                    }
                }else{
                    string += ch;
                }
            }

        }
        error("Bad Strng!");
    },
    //跳过空白
    white = ()=>{
        while( ch && ch <= ' '){
            next();
        }

    },
    word = ()=>{
        //true ,false,or null
        switch(ch){
            case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
            case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
            case  'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '"+ch+"'");
    },
    value,//值函数的占位符
    //解析一个数组值
    array =()=>{
        if(ch === '['){
            next('[');
            white();
        }
        if(ch === ']'){
            next(']');
            return array;//空数组
        }
        while(ch){
            array.push(value());
            white();
            if(ch ===']'){
                next(']');
                return array;
            }
            next(',');
            white();
        }
        error("Bad array");

    },
    object =()=>{
        var key,
        object ={};
        if(ch ==='{'){
            next('{');
            white();
            if(ch ==='}'){
                next('}');
                return object;//空对象
            }
            while(ch){
                key = string();
                white();
                next(":");
                object[key] = value();
                white();
                if(ch ==="}"){
                    next("}");
                    return object;
                }
                next(",");
                white();
            }
        }
        error("Bad Object");
    },
    value =()=>{
        //解析一个JSON值，他可以是对象，数组，字符串，数字或一个词。
        white();
        switch(ch){
            case '{' :
            return object();
            case '[':
            return array();
            case '"' :
            return string();
            case '-':
            return number();
            default:
            return ch >= '0' && ch <='9' ? number():word();
        }
    }
    return (source,reviver)=>{
        var result;
        text = source;
        at = 0;
        ch = ' ';
        result = value();
        white();
        if(ch){
            error("Syntax error");
        }
        //如果存在reviver函数，我们就递归的对这个新结构调用walk函数，
        //开始时先创建一个临时的启动对象，并以一个空字符串作为键名保存结果，
        //然后传递每个”键/值“ 对给reviver函数去处理可能存在的转换，
        //如果没有reviver函数，我们就简单的返回这个结果
        return typeof reviver === 'function'?
        function walk(holder,key){
            var k ,v,value = holder[key];
            if(value && typeof value === 'object'){
                for(key in value){
                    if(Object.hasOwnProperty.call(value,k)){
                        v = walk(value,k);
                        if(v !== undefined){
                            value[k] = v;
                        }else{
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder,key,value);
        }({'':result},''):result;
    };
};