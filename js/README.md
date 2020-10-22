#### DP
* dp[0]的情况
> 为了让边界情况也能满足通式而设置的边界值，不具有实际意义

#### 单调栈
* 根据经验「找出右边第 1 个严格大于自己的元素的下标」，这件事情可以通过「栈」完成计算，并且维护这个栈的单调性；
* 这里需要分析出「后进先出」的规律：栈顶元素出栈，表示栈顶元素找到了「右边第 1 个严格大于自己的元素」（就是当前遍历到的元素 i）。

总结：

  * 单调栈专门解决「找左边（或者右边）第 1 个严格大于自己的元素」；
  * 这里的单调栈从栈底到栈顶是一个单调不增栈，遇到值相同的元素的时候，仍然要入栈；
  * 存的是下标，拿出来以后，还要从 T 中取值；
  * 以下两点是始终保持的：
    * 因为一个元素对应的结果，要靠还没有入栈的元素的值确定，因此在遍历的时候，一定有一个元素入栈；
    * 出栈的时候，出栈元素的结果可以确定

## 排序

#### 合并两个有序数组
见[]()

#### 归并排序
> 归并排序的优越性:其实很简单。就是[3,6,4,2,9],[5,3,8,7,4]两个无序数组的合并复杂度,高于合并两个有序数组[2,3,4,6,9],[3,4,5,7,8];后者的复杂度是O(n+m),n和m分别为两个数组的长度。

递归:等尽头
```js
// 实现归并排序
function mergeSort(arr){

    if(arr.length<2){
        return arr
    }
    
    let middle=arr.length/2
    let leftArray=arr.slice(0,middle)
    let rightArray=arr.slice(middle)
    
    let left=mergeSort(leftArray)
    let right=mergeSort(rightArray)

    let result=[]

	while (left.length && right.length) {
		// 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());
    
    console.log(result);
    
    return result
}

let sortedArr=mergeSort([3, 4, 5, 6, 7, 8, 9, 10])
```
* 





