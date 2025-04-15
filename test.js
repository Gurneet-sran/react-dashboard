function diagonalDifference(arr) {
    // Write your code here
    // [[1,2,3],[4,5,6],[9,8,9]]
    let a = 0;
    let b = 0;
    // for (let i = 0; i < arr)
    for (let i = 0; i < arr.length; i++) {
        a += arr[i][i];
        b += arr[i][arr.length - 1 - i];
    }
    
    console.log(a, b);
    return Math.abs(a - b);
}

// console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]));
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));