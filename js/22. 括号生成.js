
// 感觉类似背包（选或不选），这里是加(或加)
var generateParenthesis = function(n) {

    let res=[]
    let ans=[]
    // left 为当前 ( 个数，right 为当前 ) 个数
    const dfs=function(depth,left,right){
        if(depth===n*2){
            res.push(ans.join(''))
            return
        }
        if(left<n){
            ans[depth]='('
            dfs(depth+1,left+1,right)
        }
        if(right<left){
            ans[depth]=')'
            dfs(depth+1,left,right+1)
        }
    }
    dfs(0,0,0)
    return res
};
