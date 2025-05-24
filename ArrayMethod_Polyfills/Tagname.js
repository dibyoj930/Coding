//getElementsByTagName polyfill->
// function getElementsByMytagName(element,tag){
//     let res=[];
//     let tageName=tag.toLowerCase();
//     function Traverse(node){
//     for(let child of node.children){
//         if(child.tagName.toLowerCase()==tageName){
//             res.push(child)
//         }
//         Traverse(child)
//     }
// }
//     Traverse(element);
//     return res;

// }
// const { JSDOM } = require('jsdom');

// Example HTML string to parse
// const htmlString = '<div id="foo"><span>Span</span><p>Paragraph</p><div id="bar">Div</div><div id="myid">test</div></div>';

// const { document } = (new JSDOM(htmlString)).window;
// console.log(document)
// // Get all div elements by tag name
// const divs = getElementsByMytagName(document,'div');

// const res=Array.from(divs).map((x)=>`${x.tagName.toLowerCase()}#${x.id}`)
// console.log(res)
// JSDOM is a JavaScript library that simulates a browser environment in Node.js.
// You’re creating a new instance of JSDOM with the provided htmlString. This will parse the string into a virtual DOM.
// The document is then extracted from the window object that JSDOM creates.
// After this step, the document object behaves like the document object in a web browser (it’s a DOM representation of the htmlString).

Document.prototype.GetbyTagname=function(tag){
    let res=[];
   let tagname=tag.toLowerCase();
    function Traverse(node){
       for(let child of node.children){
            if(child.tagName.toLowerCase()==tagname){
               res.push(child)
            }
       }
    }
    Traverse(this.body)
    return res;
}
window.addEventListener('DOMContentLoaded',()=>{
   const values=document.GetbyTagname('h2');
   let ans=[];
   for(let i=0;i<values.length;i++){
      values[i].style.color="red"
      ans.push(values[i].textContent)
   }
  console.log("tag values-->",values,ans)
   
})
