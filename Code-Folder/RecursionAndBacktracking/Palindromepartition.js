function partition(s) {
  const res = [];
  const path = [];

  function isPalindrome(str, start, end) {
    while (start <= end) {
      if (str[start++] !== str[end--]) return false;
    }
    return true;
  }

  function dfs(index) {
    if (index === s.length) {
      res.push([...path]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (isPalindrome(s, index, i)) {
        path.push(s.substring(index, i + 1));
        dfs(i + 1);
        path.pop();
      }
    }
  }

  dfs(0);
  return res;
}

// ✅ Example usage:
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
