var canConstruct = function(ransomNote, magazine) {
    let arr = new Array(128).fill(0);  // ASCII count

    // Count available characters in the magazine
    for (let ch of magazine) {
        arr[ch.charCodeAt(0)]++;
    }

    // Try to use characters to build the ransom note
    for (let ch of ransomNote) {
        if (--arr[ch.charCodeAt(0)] < 0) {
            return false;
        }
    }

    return true;
};