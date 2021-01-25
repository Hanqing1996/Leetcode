/**
 * @param {number[]} nums
 * @return {boolean}
 */

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
