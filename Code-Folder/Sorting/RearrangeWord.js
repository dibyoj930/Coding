// Given a sentence text (A sentence is a string of space-separated words) in the following format:
// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths. If two words have the same length, arrange them in their original order.
// Return the new text following the format shown above.
// Input: text = "Leetcode is cool"
// Output: "Is cool leetcode"
// Input: text = "Keep calm and code on"
// Output: "On and keep calm code"
const Rearrange=(str)=>{
    let arr= str.toLowerCase().split(" ").sort((a,b)=>a.length-b.length)
     arr[0]=arr[0][0].toUpperCase()+arr[0].slice(1,)
    return arr.join(" ");
}
const result = Rearrange("Leetcode is cool")
console.log(result)