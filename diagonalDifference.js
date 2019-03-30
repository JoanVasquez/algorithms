function diagonalDifference(arr) {
    let lToRight = 0;
    let rToLeft = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        lToRight += arr[i][i];
        rToLeft += arr[i][j];
    }

    return Math.abs(lToRight - rToLeft);
}
