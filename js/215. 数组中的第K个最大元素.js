/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快速排序的 partition 可以保证基准数左边的数都小于等于它，右边的数都大于等于它。
// 所以模拟快排，在基准数右端数组长度达到k-1时就停止递归
var findKthLargest = function(nums, k) {
    let target=undefined
    const quickSort=function(nums){
        let pivok=nums[0]
        let left=[],right=[]
        for(let i=1;i<nums.length;i++){
            if(nums[i]<pivok)
                left.push(nums[i])
            else
                right.push(nums[i])
        }
        leftLen=left.length
        rightLen=right.length

        // 落于基准数右端
        if(k<=rightLen){
            quickSort(right)
        }
        // 落于基准数 
        else if(k===rightLen+1){
            target=pivok
        }
        // 落于基准数左端
        else{
            k-=(rightLen+1)
            quickSort(left)
        }
    }
    quickSort(nums)
    return target
};
