function General(str){
   function Solution(str,pos,ans,count){
    if(pos==str.length){
        if(count==0){
            console.log(ans);
        }else{
            console.log(ans+count)
        }
        return
    }
    if(count==0)Solution(str,pos+1,ans+str.charAt(pos),0);
    else 
    Solution(str,pos+1,ans+count+str.charAt(pos),0)
    
    Solution(str,pos+1,ans,count+1)
   }
   Solution(str,0,"",0)
}
General("xyz")
General("ab")
// Start: Solution("xyz", 0, "", 0)

// At position 0 (x), two paths:
// Use 'x' → Solution("xyz", 1, "x", 0)
// Skip 'x' → Solution("xyz", 1, "", 1)
// Branch 1: Use 'x'

// Call: Solution(1, "x", 0)
// Character = 'y'
// Choices:

// Use 'y' → Solution(2, "xy", 0)
// Skip 'y' → Solution(2, "x", 1)
// Sub-branch: Use 'y'
// Solution(2, "xy", 0) → Character = 'z'

// Use 'z' → Solution(3, "xyz", 0) → 🔚 Reached end → Print "xyz"
// Skip 'z' → Solution(3, "xy", 1) → 🔚 Reached end → Print "xy1"
// Sub-branch: Skip 'y'
// Solution(2, "x", 1) → Character = 'z'

// Use 'z' → Solution(3, "x1z", 0) → 🔚 Print "x1z"
// Skip 'z' → Solution(3, "x", 2) → 🔚 Print "x2"
// Branch 2: Skip 'x'

// Call: Solution(1, "", 1) → Character = 'y'

// Use 'y' → Solution(2, "1y", 0)
// Skip 'y' → Solution(2, "", 2)
// Sub-branch: Use 'y'
// Solution(2, "1y", 0) → Character = 'z'

// Use 'z' → Solution(3, "1yz", 0) → 🔚 Print "1yz"
// Skip 'z' → Solution(3, "1y", 1) → 🔚 Print "1y1"
// Sub-branch: Skip 'y'
// Solution(2, "", 2) → Character = 'z'

// Use 'z' → Solution(3, "2z", 0) → 🔚 Print "2z"
// Skip 'z' → Solution(3, "", 3) → 🔚 Print "3"