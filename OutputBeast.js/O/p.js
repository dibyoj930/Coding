let count = 0;

(function() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();


let increase = (function(){
    let i = 0
    return function(){
      i++
      console.log(`courrent counter is ${i}`)
      return i
    }
  })()
  
  increase()
  increase()
  increase()

  function createCounter(){
    let i = 0
    return function(){
      i++
      return i
    }
  }
  
//   let increase1 = createCounter()
//   let increase2 = createCounter()
  
//   console.log(increase1())
//   console.log(increase1())
  
//   console.log(increase2())
//   console.log(increase2())


  function createCounter() {
    let count = 0;
    function increased() { 
      count++;
    }
    let message = `Count is ${count}`;
  
    function log() {
      console.log(message);
    }
    
    return [increased, log];
  }
  const [increased, log] = createCounter();
  increased(); 
  increased(); 
  increased(); 
  log();//o/p will be 0 but to fic it below
  //fix----------->
  function createCounter() {
    let count = 0;
    function increasedw() { 
      count++;
    }
  
    function loga() {
        let message = `Count is ${count}`;
      console.log(message);
    }
    
    return [increasedw, loga];
  }
  const [increasedw, loga] = createCounter();
  increasedw(); 
  increasedw(); 
  increasedw(); 
  loga();

  function foo() {
    function bar() {    // overridden during compilation
      return 5
    }
    return bar()
    function bar() {
      return 10
    }
  }
 console.log(foo());