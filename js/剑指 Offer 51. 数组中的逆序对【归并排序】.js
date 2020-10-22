/**
 * @param {number[]} nums
 * @return {number}
 */


// 参考 https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/solution/jian-dan-yi-dong-gui-bing-pai-xu-python-by-azl3979/

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

            /**
             * 这一行是相较于归并排序，唯一多的一行。
             * 这里求新的逆序对数的原理很简单:[2,3,8,10],[4,5,6,7];对于right中的4而言，left中的8(leftIndex=2)比他大，就意味着left中8右边的数一定都比4大。则 count+(4-2)
             */
            count+=(leftLen-leftIndex)
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());
    
    return result
}
