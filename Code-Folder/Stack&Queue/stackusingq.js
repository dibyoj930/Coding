MyStack.prototype.push = function(x) {
    this.q.push(x);
    let sz=this.q.length-1;
    while(sz--){
        let a = this.q.shift();
       this.q.push(a);
    }
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length==0;
};