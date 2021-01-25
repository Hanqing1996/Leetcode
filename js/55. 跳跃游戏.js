/**
 * @param {number[]} nums
 * @return {boolean}
 */

// dp:O(n2) 
// dp[i] 表示能否跳到第 i 个格子。最后返回 dp[num.length-1]
var canJump = function(nums) {
    let len=nums.length;
    let dp=[]
    dp[0]=true
    for(let i=1;i<len;i++){
        dp[i]=false
        for(let j=0;j<i;j++){
            if(dp[j]&&nums[j]+j>=i){
                dp[i]=true
                break
            }
        }
    }
    return dp[len-1]
};


// 贪心：O(n)
// 贪心算法，每个位置都计算自己能达到的最远距离，同时每个位置要判断自己是否可达，也就是本位置需要在当前最远能到达的距离中。最终计算出来能到达的最远距离，与数组长度比较即可。
var canJump = function(nums) {
    let len=nums.length;
    if(len<=1)
        return true
    let maxDistance=nums[0]
    let res=false
    for(let i=1;i<len;i++){
        // 当前位置可达
        if(i<=maxDistance){
            maxDistance=Math.max(maxDistance,nums[i]+i)
        }
        if(maxDistance>=len-1){
            res=true
            break
        }
            
    }
    return res
};
