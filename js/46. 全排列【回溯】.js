/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let ans=[],res=[]
    let visited=Array(nums.length+1).fill(false) 

    let DFS=function(depth){
        if(depth===nums.length){
            // ans 是作为状态变量被共享的所以会变化，因此存入 res 的应该是 ans 的深拷贝
            res.push([...ans])
            return 
        }

        for(let i=0;i<nums.length;i++){
            if(!visited[nums[i]]){
                ans[depth]=nums[i]
                visited[nums[i]]=true
                DFS(depth+1)
                visited[nums[i]]=false
            }
        }  
    }

    DFS(0)
    return res
};
