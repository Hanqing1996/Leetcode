/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

    // 排序，把相同的元素聚集起来，以方便后面的重复过滤
    nums=nums.sort((a,b)=>a-b)

    let ans=[],res=[]
    let visited=Array(nums.length).fill(false) 

    let DFS=function(depth){
        if(depth===nums.length){
            res.push([...ans])
            return 
        }

        for(let i=0;i<nums.length;i++){
            // [...1,1...] 如果上次已经设置 ans[i-1]=1(前面那个)，本次 ans[i]=1(后面那个)就不能设置了，否则会重复
            // !visited[i-1] 是用来保证目前是对纵向遍历作拦截(!visited[i-1] 证明一定是刚刚从下一个 DFS 中回退回来)
            if(!visited[i]){
                if(i>0&&nums[i]===nums[i-1]&&!visited[i-1])
                    continue
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
