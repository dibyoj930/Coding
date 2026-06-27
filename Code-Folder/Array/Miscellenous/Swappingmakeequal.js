function  findSwapValues(a, b) {
     
    let temp1=0,temp2=0;
    let n=a.length,m=b.length;
    for(let i=0;i<n;i++){
        temp1+=a[i];
    }
     for(let i=0;i<m;i++){
        temp2+=b[i];
    }
    if(temp1==temp2){
        return 1;
    }
    a.sort((x,y)=>x-y);
    b.sort((x,y)=>x-y);
    let i=0,j=0;
    while(i<n && j<m){
        let sumofa=temp1-a[i]+b[j];
        let sumofb=temp2-b[j]+a[i];
        if(sumofa == sumofb){
            return 1;
    }
    if(sumofa>sumofb){
        i++;
    }
    else{
        j++;
    }
    }
    return false;

}


// Input: a[] = [4, 1, 2, 1, 1, 2], b[] = [3, 6, 3, 3]
// Output: true
// Explanation: Sum of elements in a[] = 11, Sum of elements in b[] = 15,
//  To get same sum from both arrays, we can swap following values: 1 from a[] and 3 from b[]