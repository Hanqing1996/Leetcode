/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

/**
 * 题目的意思就是对原来的数组进行分割，分割的每一小块大小不超过k，然后对于每一个子块，子块里的所有数都会变成原来数组块里的最大值。经过这个变化之后求整体的最大值。（原数组和分割后的数组块顺序应该一致，也就是只能决定在哪里切一刀
 * 
 */

var maxSumAfterPartitioning = function(arr, k) {
    // dp[i]：数组的前i个数即nums[0,1...i-1],被切了n刀，分割成n-1个数组，每个数组的值变成最大值，分割后的最大和。


    let {length}=arr
    let dp=Array(length+1).fill(0)

    for(let i=1;i<=length;i++){
        let MAX=-1
        for(let j=i-1;(i-j)<=k&&j>=0;j--){
                MAX=Math.max(MAX,arr[j])
                dp[i]=Math.max(dp[i],dp[j]+(i-j)*MAX)
        }
    }
    return dp[length]

};
