class Solution {
    find_rec(n1, n2, s, found) {
        if (s.length === 0 && found) {
            return true;
        }
        const n3 = (n1 + n2).toString();
        const idx = Math.min(n3.length, s.length);
        if (s.substring(0, idx) === n3) {
            return this.find_rec(n2, parseInt(n3), s.substring(idx), true);
        }
        return false;
    }

    isAdditiveNumber(num) {
        for (let i = 1; i < num.length - 1; ++i) {
            const n1 = parseInt(num.substring(0, i));
            if (n1.toString() !== num.substring(0, i)) { //"0234" 0 prefix scenario
                break;
            }
            for (let j = i + 1; j < num.length; ++j) {
                const n2 = parseInt(num.substring(i, j));
                if (n2.toString() !== num.substring(i, j)) {
                    break;
                }
                const found = this.find_rec(n1, n2, num.substring(j), false);
                if (found) {
                    return true;
                }
            }
        }
        return false;
    }
}
const sol=new Solution();

console.log(sol.isAdditiveNumber("112358"))

// So the sequence is: 1, 1, 2, 3, 5, 8 → matches the full string.

// Picks the first number n1 from the start.
// if (n1.toString() !== num.substring(0, i)) break;
// Rejects numbers with leading zeros like "01".
// for (let j = i + 1; j < num.length; ++j)
// Picks the second number n2.
// if (n2.toString() !== num.substring(i, j)) break;
// Again skips invalid numbers with leading zeros.
// const found = this.find_rec(n1, n2, num.substring(j), false);
// if (found) return true;

// ✅ Execution: Step-by-step through isAdditiveNumber
// isAdditiveNumber("112358")
// First Loop:

// Try all possible splits for n1 and n2:

// i = 1 → n1 = "1"
// j = 2 → n2 = "1" → Call find_rec(1, 1, "2358", false)
// ✅ Step-by-step Recursive Calls
// 🔁 1st Call:

// find_rec(1, 1, "2358", false)
// n1 + n2 = 2 → check if "2" matches start of "2358" ✅
// Call: find_rec(1, 2, "358", true)
// 🔁 2nd Call:

// find_rec(1, 2, "358", true)
// n1 + n2 = 3 → check "3" against "358" ✅
// Call: find_rec(2, 3, "58", true)
// 🔁 3rd Call:

// find_rec(2, 3, "58", true)
// n1 + n2 = 5 → check "5" against "58" ✅
// Call: find_rec(3, 5, "8", true)
// 🔁 4th Call:

// find_rec(3, 5, "8", true)
// n1 + n2 = 8 → check "8" against "8" ✅
// Call: find_rec(5, 8, "", true)
// ✅ Final Call:

// find_rec(5, 8, "", true)
// s.length === 0 && found === true → return true ✅
// ✅ Final Result:
// Function returns true → "112358" is additive.