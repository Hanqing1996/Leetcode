/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let {length:len}=candidates
    let ans=[]
    let res=[]
    let DFS=function(index,sum,count){

        if(index===len){
            if(sum===target){
                res.push([...ans.slice(0,count)])
            }
            return
        }

        // 选
        /**
         * 这里做了剪枝，如果加上 candidates[index] 的 sum 大于 target，则这一步不必走
         */
        if(sum+candidates[index]<=target){
            ans[count]=candidates[index]
            DFS(index,sum+candidates[index],count+1)
        }

        // 不选
        DFS(index+1,sum,count)
    }

    DFS(0,0,0)
    return res
};
