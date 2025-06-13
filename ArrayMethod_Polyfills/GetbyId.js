

Document.prototype.getElementbymyId=function(id){
    var elements = document.getElementsByTagName('*');
    
    for(let i=0;i<elements.length;i++){
        let el=elements[i];
        if(el.id==id){
            return el;
        }
    }
    return null;
}



window.addEventListener('DOMContentLoaded',(e)=>{
    const div=document.getElementbymyId('myh2');
    console.log("****",div)
    div.style.opacity="0.2"
})
