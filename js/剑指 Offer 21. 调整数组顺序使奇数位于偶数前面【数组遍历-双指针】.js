/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 找奇数，填充到数组的前半部分
var exchange = function(nums) {
    let p=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2===1){
            // 交换nums[p]和nums[i],p!=i说明nums[p]一定不是奇数
            swap(nums,i,p)
            p++
        }
    }
    return nums
};
function swap(nums,index1,index2){
    let temp=nums[index1]
    nums[index1]=nums[index2]
    nums[index2]=temp
}
