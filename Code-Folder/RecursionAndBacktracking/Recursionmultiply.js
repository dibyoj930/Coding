function Recurs(m,n){
   if(n==0)return 0;
   let ans=m+Recurs(m,n-1)
   return ans;
}

function Recurmultiply(m,n){
   let small=Math.min(m,n);
   let large=Math.max(m,n);
   return Recurs(small,large)
}
console.log(Recurmultiply(16,9))