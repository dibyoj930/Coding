// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
const GetnotBanned = (paragraph,banned)=>{

let arr = paragraph.toLowerCase().split(/\W+/g)
console.log(arr)
    let map = {}

    for(let word of arr) {
        if(!map[word]) {
            map[word] = 1        
        } else {
            map[word]++
        }
    }

   return Object.keys(map).sort((a,b) => {
        return map[b] - map[a]
    }).filter(word => !banned.includes(word))[0]
}

console.log("banned word->",GetnotBanned("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))