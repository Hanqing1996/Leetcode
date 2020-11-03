/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let ans=[],res=[]
    let visited=Array(nums.length).fill(false) 

    let DFS=function(depth){
        if(depth===nums.length){
            res.push([...ans])
            return 
        }

        for(let i=0;i<nums.length;i++){
            if(!visited[i]){
                ans[depth]=nums[i]
                visited[i]=true
                DFS(depth+1)
                visited[i]=false
            }
        }  
    }

    DFS(0)
    return res
};

// 结果
// 横向看 [1->2->3]的递进是 DFS不断深入到下层（DFS(1)->DFS(2)）+ visited 过滤 的结果。
// 纵向看 [1, 2->3 ... ]的变化是DFS回退到上层（DFS(2)->DFS(1)）后继续之前的for循环，for 循环遍历的结果（DFS 回退后 i++,所以nums由2遍历到3）
