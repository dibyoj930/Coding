function LazyMan(name, logFn) {
   const delay = (fn, ms) => new Promise(res => setTimeout(() => { fn(); res(); }, ms));
 
   const laziness = {
     _tasks: [],
     eat(food) {
       this._tasks.push(`Eat ${food}.`);
       return this;
     },
     sleep(seconds) {
       this._tasks.push(seconds);
       return this;
     },
     sleepFirst(seconds) {
       this._tasks.unshift(seconds);
       return this;
     }
   };
 
   // Initialize with greeting AFTER sleepFirst
   laziness._tasks.unshift(`Hi, I'm ${name}.`);
 
   // Defer execution
   setTimeout(async () => {
     for (let task of laziness._tasks) {
       if (typeof task === 'number') {
         await delay(() => logFn(`Wake up after ${task} second${task > 1 ? 's' : ''}.`), task * 1000);
       } else {
         logFn(task);
       }
     }
   });
 
   return laziness;
 }
 

// LazyMan('Jack', console.log).eat('banana').eat('apple').sleepFirst(2) ;
LazyMan('Jack', console.log).eat('banana').eat('apple').sleepFirst(1).eat('egg').sleepFirst(1)

LazyMan('Jack', console.log)
  .eat('banana')
  .eat('apple')

  LazyMan('Jack', console.log)
  .eat('banana')
  .sleep(10)
  .eat('apple')
  .sleep(1)

  LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(10)
  .eat('apple')
  .sleep(1)