function Timeout(){
    let timerid=0;
    let timermap={};
    function CreateTime(cb,time,...args){
        var id=timerid++;
        timermap[id]=true;
        let start = Date.now();
        function triggercallback(){
            if(!timermap[id])return ;
            if(Date.now()>time+start){
                cb.apply(this,...args)
            }else{
               requestIdleCallback(triggercallback);
            }
        }
        requestIdleCallback(triggercallback)
        return id
    }
    function cleartime(){
        delete timermap[id];
    }
    return {cleartime,CreateTime}
}
const {CreateTime,cleartime}=Timeout();

let timer = CreateTime(()=>{
    console.log("Hello welcome in settimeout!")
},2000,"satish","Ramesh")
console.log(timer)
