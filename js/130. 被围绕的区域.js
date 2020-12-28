/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 不被"X",包围的"O"(非岛屿),特点:一定可由边界延申触及到
var solve = function(board) {
    let row=board.length
    if(row===0)
        return
    let column=board[0].length

    const dfs=function(i,j){
        
        
        if(i<0||i===row||j<0||j===column)
            return
        if(board[i][j]==='X'||board[i][j]=='NO')
            return
        
        board[i][j]='NO'
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
        
    }

    for(let i=0;i<row;i++){
        // 由边界的"O",进入dfs
        if(board[i][0]==='O')
            dfs(i,0)
        if(board[i][column-1]==='O')
            dfs(i,column-1)
    }

    for(let j=0;j<column;j++){
        if(board[0][j]==='O')
            dfs(0,j)
        if(board[row-1][j]==='O') 
            dfs(row-1,j)
    }

    // 把剩余的'O'改为'X',把'NO'还原为'O'即可
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(board[i][j]==='NO')
                board[i][j]='O'
            // 沉入海洋吧，岛屿
            else if(board[i][j]==='O')
                board[i][j]='X'
            
        }
    }
};
