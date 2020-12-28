/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row=grid.length
    if(row===0)
        return 0
    let column=grid[0].length
    let res=0
    const dfs=function(i,j){
        if(i<0||i===row||j<0||j===column)
            return
        if(grid[i][j]==="0")
            return
        grid[i][j]="0"
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }

    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(grid[i][j]==="1"){
                res++
                dfs(i,j)
            }       
        }
    }
    return res
};
