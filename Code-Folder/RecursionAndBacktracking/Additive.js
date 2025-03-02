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
            if (n1.toString() !== num.substring(0, i)) {
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