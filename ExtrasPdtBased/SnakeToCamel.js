const snakeToCamel=(str)=>{
    // is_flag_on
    return str.split("_").filter(Boolean).map((x,index)=>index===0?x[0].toLowerCase()+x.slice(1).toLowerCase():x[0].toUpperCase()+x.slice(1).toLowerCase()).join("")
}
console.log(snakeToCamel("is_IOS_or_Android"))
//this is correct when we don't want leading or trailing underscore .filter(Boolean) will remove it.
//below is the larger implementation
const Ansnake=(str)=>{
    if (str.length ===0) return '';
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "_" && str[i - 1] !== '_' && str[i + 1] !== '_' && i < str.length - 1) {
      result += str[i + 1].toUpperCase();
      i++;
    } else {
      result += str[i];
    }
  }
  return result
}