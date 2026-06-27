function Product(arr){
    let arr1=new Array(arr.length).fill(1);
        let arr2=new Array(arr.length).fill(1);
        for(let i=1;i<arr.length;i++){
            arr1[i]=arr[i-1]*arr1[i-1];
        }
        console.log(arr1)
        for(let i=arr.length-2;i>=0;i--){
            arr2[i]=arr[i+1]*arr2[i+1];
        }
        console.log(arr2)
        for(let i=0;i<arr.length;i++){
            arr1[i]*=arr2[i]
        }
        return arr1;
}

console.log(Product( [10, 3, 5, 6, 2]))
arr2=[   180,60,12,2,1]

//brute force

function multiply(arr){
    const answer = new Array(n).fill(1);
    for(let i=0;i<arr.length;i++){
        let pdt=1;
        for(let j=0;j<arr.length;j++){
            if(i!=j){
               pdt*=arr[j];
            }
        }
        answer[i]=pdt;
    }
    return answer;
}
