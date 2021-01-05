/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 参考 https://leetcode-cn.com/problems/diagonal-traverse/solution/zui-zhi-bai-de-xie-fa-by-meng-zhi-hen-n/
/**
 * 向右上方:x-=1,y+=1。可能碰到上方壁(x===0&&y<columns-1)或右方壁(x>=0&&y===columns-1)
 * 向左下方:x+=1,y-=1。可能碰到下方壁(x===rows-1&&y>=0)或左方壁(y===0&&x<rows-1)
 */
var findDiagonalOrder = function(matrix) {
    let rows=matrix.length
    if(rows===0)
        return []
    let columns=matrix[0].length

    let res=[]

    let amount=rows*columns
    let count=0

    let x=0,y=0
    while(count<amount){
        // 向右上方
        while(x>=0&&y<columns){
            res.push(matrix[x][y])
            count++
            // 碰到上方壁
            if(x===0&&y<columns-1){
                y+=1
                break
            }
            // 碰到右方壁
            if(x>=0&&y===columns-1){
                x+=1
                break
            }
            x-=1
            y+=1
        }
        // 向左下方
        while(y>=0&&x<rows){
            res.push(matrix[x][y])
            count++
            // 碰到下方壁
            if(x===rows-1&&y>=0){
                y+=1
                break
            }
            // 碰到左方壁
            if(y===0&&x<rows-1){
                x+=1
                break
            }
            x+=1
            y-=1
        }
    }
    return res
};
