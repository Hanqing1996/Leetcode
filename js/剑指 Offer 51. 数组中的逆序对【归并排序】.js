/**
 * @param {number[]} nums
 * @return {number}
 */
let count=0
var reversePairs = function(nums) {

    // 重置一下，不然 sb 力扣编译器老报错
    count=0
    mergeSort(nums)
    return count
};

function mergeSort(arr){

    if(arr.length<2){
        return arr
    }
    
    let middle=arr.length/2
    let leftArray=arr.slice(0,middle)
    let rightArray=arr.slice(middle)
    
    let left=mergeSort(leftArray)
    let right=mergeSort(rightArray)

    let {length:leftLen}=left

    let result=[]

    let leftIndex=0

	while (left.length && right.length) {
		// 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
		if (left[0] <= right[0]) {
            result.push(left.shift());
            leftIndex++
		} else {
            result.push(right.shift());

            count+=(leftLen-leftIndex)
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());
    
    return result
}
