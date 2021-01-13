/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/**
 * visited 用于控制在当前路径中不进入之前已经经过的格子，作用类似于全排列中的 visited
 */
var exist = function(board, word) {
    let row=board.length
    let column=board[0].length
    let visited=Array.from({length:row},()=>Array.from({length:column},()=>false))

    let count=word.length
    let find=false

    const dfs=function(i,j,depth){
        if(find)
            return
        if(depth===count){
            find=true
            return
        }
        if(i<0||i>=row||j<0||j>=column)
            return
        if(board[i][j]!=word[depth])
            return
        if(!visited[i][j]){
            visited[i][j]=true
            dfs(i-1,j,depth+1)
            dfs(i+1,j,depth+1)
            dfs(i,j-1,depth+1)
            dfs(i,j+1,depth+1)
            visited[i][j]=false
        }
    }

    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(board[i][j]===word[0]&&!find){
                dfs(i,j,0)
                if(find)
                    return true
            }
        }
    }
    return false
};
