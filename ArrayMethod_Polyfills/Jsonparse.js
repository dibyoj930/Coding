var jsonString = '{"name":"Alice","age":30,"isStudent":false}';

function parse(string){
    if(typeof string!=="string"){
        throw new Error("non string value!");
    }
    try{
        let res=eval('('+string+')');
        return res;
    }catch(e){
        throw new SyntaxError('String cannot be parsed to Json')
    }
}
try{
    const parsed=parse(jsonString);
    console.log(parsed);
}catch(e){
    console.log(e.message)
}