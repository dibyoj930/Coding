

Document.prototype.Getbymyclass=function(classname){
    let element=document.getElementsByTagName("*");
    var res=[];
    for(let i=0;i<element.length;i++){
        let classNames=element[i].className.split(" ");
         // console.log(classNames)
        // let t=classname.split(" ")
        // const hasaall = t.every((cl)=>classNames.includes(cl));
        // if(hasaall){
        //     res.push(`${element[i].tagName.toLowerCase()}.`+`${element[i].className.split(" ").join(".")}`);
        // }
        // console.log(classNames)
        //in case give multiple classnames and want all those to have
        for(let j=0;j<classNames.length;j++){
            if(classNames[j]==classname){
                res.push(element[i]);
                break;
            }
        }

    }
    // console.log(res)
    return res;
}
window.addEventListener('DOMContentLoaded',()=>{
    const val=document.Getbymyclass('classmate');
    console.log(val)
    let ans=[]
    for(let i=0;i<val.length;i++){
        val[i].textContent='its new written by me!'
        val[i].style.color="blue"
        ans.push(val[i].textContent)
    }
    console.log(ans)
})