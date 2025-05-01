var MyQueue = function() {
    this.q1=[];
    this.q2=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
   this.q1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.empty())return null;
    if(this.q2.length===0){
        while(this.q1.length){
            this.q2.push(this.q1.pop());
        }
    }
    return this.q2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.empty())return null;
    if(this.q2.length===0){
        while(this.q1.length){
            this.q2.push(this.q1.pop());
        }
    }
    return this.q2[this.q2.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.q1.length==0&&this.q2.length==0;
};