var addTwoNumbers = function(l1, l2) {
    let r1=l1;
  let r2=l2;
  let sum=0,ca=0;
  let res=null,temp=null,c=null;
  while(r1||r2){
      sum=ca+(r1?r1.val:0)+(r2?r2.val:0);
      ca=sum>=10?1:0;
      sum=sum%10;
      temp=new ListNode(sum);
      if(res==null)res=temp;
      else c.next=temp;
      c=temp;
      if(r1)r1=r1.next;
      if(r2)r2=r2.next;

  }
  if(ca){
      temp=new ListNode(ca);
      c.next=temp;
      c=temp;
  }
  // res=res;
  return res;
};
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]