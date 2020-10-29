/**
 * @param {number[]} nums
 * @return {number}
 */
 
 var findDuplicates = function(nums) {
    let result=[]
    // 原地哈希
    let i=0
    while(i<nums.length){
        if(nums[i]!=i+1){
            while(nums[nums[i]-1]!=nums[i]){
                swap(nums,i,nums[i]-1)
            }
        }
        i++;
    }

    // 在本题限定条件下，只要发现原地哈希后，nums[nums[i]-1]!=i+1，就证明nums[i]重复了
    for(let i=0;i<nums.length;i++){
        if(nums[nums[i]-1]!=i+1){
            result.push(nums[i])
        }
    }

    return result
};
let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


let arr=[4,3,2,7,8,2,3,1]
const result=findDuplicates(arr)
console.log(result)
