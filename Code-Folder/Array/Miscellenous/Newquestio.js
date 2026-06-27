function getMinOperations(s, m, k) {
    let chars = s.split('');
    let n = chars.length;
    let ops = 0;
    let i = 0;

    while (i <= n - m) {
        // Check if s[i..i+m-1] is a "bad" segment (all '0')
        let isBad = true;
        for (let j = 0; j < m; j++) {
            if (chars[i + j] !== '0') {
                isBad = false;
                break;
            }
        }

        if (isBad) {
            // Place operation at rightmost position in this segment
            let opStart = Math.min(i + m - 1, n - k);
            for (let j = opStart; j < opStart + k && j < n; j++) {
                chars[j] = '1';
            }
            ops++;
            i = i + 1; // Move to next window (can optimize further)
        } else {
            i++;
        }
    }

    return ops;
}
