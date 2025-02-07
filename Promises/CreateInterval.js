function Interval(){
    let timermap={};
    let timerid=0;
    const setMy=function(cb,time,...args){
        timerid++;
        function innerInterval(){
            timermap[timerid]=setTimeout(()=>{
                cb.apply(this,args);
                if(timermap[timerid])innerInterval();
            },time)
           
            return timerid;
        }
        return innerInterval;
      
    }
    const myClearInterval = function(id) {
        clearTimeout(timerMap[id]);
        delete timerMap[id];
      }
      return {setMy,myClearInterval}
}

const {setMy,myClearInterval}=Interval()

const time = setMy(()=>{
    console.log("executed after sometime!!!!")
},2000)
time()