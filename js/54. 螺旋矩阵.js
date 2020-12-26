/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let rows=matrix.length
    let columns=matrix[0].length

    let res=[]
    let i=0,j=0,di=0,dj=1

    for(let a=0;a<rows;a++){
        for(let b=0;b<columns;b++){
            res.push(matrix[i][j])
            matrix[i][j]=undefined // 一个肯定不存在于原矩阵中的值
            if(matrix[(i+di)%rows][(j+dj)%columns]===undefined)
                [di,dj]=[dj,-di]
            i+=di
            j+=dj
        }
    }
    return res
};
