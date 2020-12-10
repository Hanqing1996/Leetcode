/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

/**
 * nums= [2,3,1,2,4,3],长度为6
 * [0,1]=>[nums[0]]
 * [0,2]=>[nums[0],nums[1]]
 * [0,3]
 * ...
 * [0,6]
 * [0,7]
 * [1,2]
 * ...
 * [1,7]
 * ...
 * [6,7]=>[nums[6]]
 * 即 [0,1,2,3,4,5,6,7] 的长度为2的子集
 */

// DFS:超时
var minSubArrayLen = function(s, nums) {
    let sum=nums.reduce((a,b)=>a+b,0)
    if(sum<s)
        return 0
    let minLen=nums.length    
    const n=nums.length+1
    let ans=[]
    const dfs=function(index,depth){
        if(depth===2){
            
            let sum=nums.slice(ans[0],ans[1]).reduce((a,b)=>a+b,0)
            if(sum>=s&&(ans[1]-ans[0])<minLen)
                minLen=ans[1]-ans[0]
            return
        }
        for(let i=index;i<=n;i++){
            ans[depth]=i
            dfs(index+1,depth+1)
        }
    }
    dfs(0,0)
    return minLen
};




