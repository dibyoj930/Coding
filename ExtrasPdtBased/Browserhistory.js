function BrowserHistory(){
    this.History=[];
    this.index=-1;

    this.visit=function(url){
         this.History[++this.index]=url;
    }
    this.current=function(){
        return this.History[this.index];
    }
    this.previous=function(){
        this.index = Math.max(0,--this.index);
    }
    this.forward=function(){
        this.index=Math.min(this.History.length-1,++this.index)
    }
}
const data =  new BrowserHistory();

data.visit("https://duckduckgo.com/");
data.visit("https://medium.com/");
data.visit("https://dev.to/");

data.current();
console.log(data.current());
data.previous();
console.log(data.current());
data.forward()
console.log(data.current());
data.previous();
data.previous();
data.previous();
console.log(data.current());