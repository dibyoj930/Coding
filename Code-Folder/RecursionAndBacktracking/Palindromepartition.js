class Solution {
    partition(s) {
      const res = [];
      const path = [];
      this.partitionHelper(0, s, path, res);
      return res;
    }
  
    partitionHelper(index, s, path, res) {
      if (index === s.length) {
        res.push([...path]);
        return;
      }
      for (let i = index; i < s.length; ++i) {
        if (this.isPalindrome(s, index, i)) {
          path.push(s.substring(index, i + 1));
          this.partitionHelper(i + 1, s, path, res);
          path.pop();
        }
      }
    }
  
    isPalindrome(s, start, end) {
      while (start <= end) {
        if (s[start++] !== s[end--]) return false;
      }
      return true;
    }
  }
  
  // Example usage:
  const solution = new Solution();
  const s = "aab";
  console.log(solution.partition(s));
  