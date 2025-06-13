Document.prototype.GetbyName=function(name){
    var element=document.getElementsByTagName("*");
    let el=[];
    for(let i=0;i<element.length;i++){
        let value=element[i].getAttribute("name")
        if(value==name){
         el.push(element[i]);
        }
    }
    return el;
}
window.addEventListener('DOMContentLoaded',(e)=>{
    const values=document.GetbyName('username');

    console.log(values)
    for(let i=0;i<values.length;i++){
        values[i].classList.add('newvalue')
    }
})