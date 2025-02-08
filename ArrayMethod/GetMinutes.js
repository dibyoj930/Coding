const { min } = require("lodash");

const customGetHours=(time)=>{
    if(typeof time==='string'){
        const part = time.split(":");
        if(part.length>=2){
            const hours = part[0];
            if(!isNaN(hours)&&hours<24&&hours>=0){
                return hours
            }
        }
    }if(time instanceof Date){
        return time.getHours()
    }
}

const customHour2 = customGetHours('14:30');
console.log(customHour2)

//customgetminutes->
const customGetMinutes = (time)=>{
    if(typeof time=='string'){
        const part = time.split(':');
        if(part.length>=2){
            const minute = part[1];
            if(!isNaN(minute)&&minute>=0&&minute<60){
                return minute
            }
        }
    }
    if(time instanceof Date){
        return time.getMinutes()
    }
}
const customHour3 = customGetMinutes('14:30');
console.log(customHour3)