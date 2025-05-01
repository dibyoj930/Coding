var removeElements = function(head, val) {
    while(head!=null&&head.val==val){
      head=head.next;
  }
  if(!head)return head;

  let ptr=head;
  while(ptr.next!=null){
      if(ptr.next.val==val){
          ptr.next=ptr.next.next;
      }
     else{
          ptr=ptr.next;

     }        
  }
  return head;
};
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]