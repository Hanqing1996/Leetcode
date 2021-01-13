/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {

    let count=0
    if(k===0)
        return 1

    let grid=Array.from({length:m},()=>Array.from({length:n},()=>0))

    // 提前计算哪些格子不可访问
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            let bloackSum=(String(i)+String(j)).split('').map(Number).reduce((sum,current)=>sum+current,0)
            if(bloackSum>k)
                grid[i][j]=1
        }
    }

    // 接下来就是求面积
    const dfs=function(i,j){
        if(i<0||i===m||j<0||j===n)
            return
        if(grid[i][j]===1)
            return
        
        grid[i][j]=1
        count++
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }

    dfs(0,0)
    return count
};
