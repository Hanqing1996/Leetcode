/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let rows=matrix.length
    let columns=matrix[0].length

    // 先沿对角线(左上->右下)交换元素
    for(let i=0;i<rows;i++){
        for(let j=i+1;j<columns;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
        }
    }

    // 再每行围绕中点进行元素交换
    let mid=Math.floor(columns/2)
    for(let i=0;i<rows;i++){
        for(let j=0;j<mid;j++){
            let temp=matrix[i][j]
            matrix[i][j]=matrix[i][columns-1-j]
            matrix[i][columns-1-j]=temp
        }
    }
};
