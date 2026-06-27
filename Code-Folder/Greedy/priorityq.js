function maximumScore( a,  b,  c) {
    priority_queue<let>pq;
    pq.push(a);
    pq.push(b);
    pq.push(c);
    let k=0;
    while(pq.size()>1){
        let x=pq.top()-1;
        pq.pop();
        let y=pq.top()-1;
        pq.pop();
        k++;
        if(x>0)pq.push(x);
        if(y>0)pq.push(y);
        
    }
   
    return k;
    
}
