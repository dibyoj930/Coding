class Solution {
    celebrity(mat) {
        // code here
        let n = mat.length;
        let top = 0, down = n - 1;

        // Step 1: Find a potential celebrity
        while (top < down) {
            if (mat[top][down] === 1) {
                // top knows down → top can't be celebrity
                top++;
            } else {
                // top doesn't know down → down can't be celebrity
                down--;
            }
        }

        let candidate = top;

        // Step 2: Verify candidate
        for (let i = 0; i < n; i++) {
            if (i === candidate) continue;

            // If candidate knows anyone, or someone doesn't know candidate → not celebrity
            if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                return -1;
            }
        }

        return candidate;
    }
}