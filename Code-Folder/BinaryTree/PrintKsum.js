function sum(root, path, k, result) {
    if (!root) return;

    path.push(root.val);

    let sumSoFar = 0;
    for (let i = path.length - 1; i >= 0; i--) {
        sumSoFar += path[i];
        if (sumSoFar === k) {
            result.push(path.slice(i)); // Store a copy of the valid subpath
        }
    }

    sum(root.left, path, k, result);
    sum(root.right, path, k, result);

    path.pop(); // Backtrack
}

var pathSum = function(root, targetSum) {
    let result = [];
    sum(root, [], targetSum, result);
    return result;
};


//count of paths 
// function countPaths(root, path, k, count) {
//     if (!root) return;

//     path.push(root.val);

//     let sumSoFar = 0;
//     for (let i = path.length - 1; i >= 0; i--) {
//         sumSoFar += path[i];
//         if (sumSoFar === k) {
//             count.count += 1; // Increment count
//         }
//     }

//     countPaths(root.left, path, k, count);
//     countPaths(root.right, path, k, count);

//     path.pop(); // Backtrack
// }

// var pathSum = function(root, targetSum) {
//     let count = { count: 0 }; // Using an object to maintain reference
//     countPaths(root, [], targetSum, count);
//     return count.count;
// };
