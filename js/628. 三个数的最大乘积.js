/**
 * @param {number[]} nums
 * @return {number}
 */

// DFS 暴力之,果然超时
// var maximumProduct = function(nums) {
//     let res
//     const dfs=function(mul,depth,index){
//         if(depth===3){
//             res=res==undefined?mul:Math.max(res,mul)
//         }
//         for(let i=index;i<nums.length;i++){
//             dfs(mul*nums[i],depth+1,i+1)
//         }
//     }
//     dfs(1,0,0)
//     return res
// };


/**
 * 原数组都为正数=>[5,6,7,8,9] 选最大的三个
 * 原数组都为负数=>[-10,-9,-8,-7,-6] 选最大的三个
 * 原数组有正有负=>[-10,-9,-8,4,5,6,7] 选最小的两个和最大的一个 
 */
var maximumProduct = function(nums) {
    nums=nums.sort((a,b)=>a-b)
    let len=nums.length
    return Math.max(nums[0]*nums[1]*nums[len-1],nums[len-1]*nums[len-2]*nums[len-3])
}
