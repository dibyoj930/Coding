//addEventListener Polyfill
function AddListener(eventname,callback,useCapture){
    if(!this._event)this._events={};
      if(!this._event[eventname])this._event[eventname]=[]
      this._event[eventname].push(callback);
     if(useCapture){
        this.AddListener(eventname,callback,true);
     }else{
        this.attachEvent("on"+eventname,callback)
     }
}


//removeEventListener
Element.prototype.MyremoveListener=function(eventname,callback){
   if(!this._event)return;
   if(!this._event[eventname])return;
   let index = this._event[eventname].indexOf(callback);
   if(index!==-1){
      this._event[eventname].splice(index,1);
      if(useCapture){
         this.MyremoveListener(eventname,callback,true)
      }else{
         this.detachEvent("on"+eventname,callback)
      }
   }

}
