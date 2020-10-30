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
见[88. 合并两个有序数组](https://github.com/Hanqing1996/Leetcode/blob/master/js/88.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E3%80%90%E5%8E%9F%E5%9C%B0%E6%8E%92%E5%BA%8F%E3%80%91.js)

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

#### 小顶堆
如果堆上的任意节点都小于等于子节点值，则称为 小顶堆

[![BAALh8.png](https://s1.ax1x.com/2020/10/23/BAALh8.png)](https://imgchr.com/i/BAALh8)



* 根据数组建立小顶堆

参考:https://github.com/sisterAn/JavaScript-Algorithms/issues/60
```
/**
 * 比如[,6,5,4,1,3,2,8]变成[,8,5,6,1,3,2,4]
 * 将[,6,5,4,1,3,2,8]对应的完全二叉树（按下标逐层铺展开）改造为一个大顶堆
 *     1
 *   2   3
 *  4 5 6 7
 * 8 9
 */
function buildHeap(arr){
    // 从最后一个非叶子节点开始,注意 arr[0]不用于存储数据，即arr对应完全二叉树的映射下标是直接从1开始的
    let heapSize=arr.length-1
    for(let i=Math.floor(heapSize/2);i>=1;i--){
        console.log(i)
        heapifyBig(arr,i,heapSize)
    }
    return arr
}

// 建立小顶堆
function heapifySmall(arr,i,heapSize){
    // 让人惊艳的while循环，保证了在以i节点为父节点时若发生父子节点值呼唤，则会自动向i节点以后检验子节点树是否符合大顶堆特性
    while (true) {
        var minIndex = i;
        if(2*i <= heapSize && arr[i] > arr[i*2] ) {
            minIndex = i*2;
        }
        if(2*i+1 <= heapSize && arr[minIndex] > arr[i*2+1] ) {
            minIndex = i*2+1;
        }
        if (minIndex === i) break;
        swap(arr, i, minIndex); // 交换 
        i = minIndex; 
    }
}

// 建立大顶堆
function heapifyBig(arr,i,heapSize){
    // 让人惊艳的while循环，保证了在以i节点为父节点时若发生父子节点值呼唤，则会自动向i节点以后检验子节点树是否符合大顶堆特性
    while (true) {
        var maxIndex = i;
        if(2*i <= heapSize && arr[i] < arr[i*2] ) {
            maxIndex = i*2;
        }
        if(2*i+1 <= heapSize && arr[maxIndex] < arr[i*2+1] ) {
            maxIndex = i*2+1;
        }
        if (maxIndex === i) break;
        swap(arr, i, maxIndex); // 交换 
        i = maxIndex; 
    }
}


let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

let example=[,5, 2, 3, 4, 1]
console.log(buildHeap(example))
```



#### top K 问题

1. 选取数组的前k个元素，构成一个小顶堆。
2. 对于剩余元素，逐个将其与小顶堆的顶部元素进行比较。若小于顶部元素则跳过，否则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
3. 遍历完成后，堆中的数据就是前K大的数据

* 原理

其实就是不断求解"数组第k大的元素"。

对于剩余元素的遍历，就是去查找是否有比"当前第K大元素"更优的解。如果元素大于堆顶元素，证明原先的堆顶元素一定不是整个数组的第K大元素（至少有小顶堆中的K个元素，加上当前被比较的数组元素，总计K+1个元素比它大），而被比较的元素则可能是最优解，所以进行替换，把它放入小顶堆。

至于最后的小顶堆里存储前K大的元素，只是因为堆顶元素是第K大的元素，而小顶堆的剩余元素又都小于它而已。




#### 原地哈希
> 不用到任何额外空间
---
#### 数组遍历-双指针
p实际是用于构造符合题意的新数组。q用于遍历原先数组，并填充p
* [26. 删除排序数组中的重复项](https://github.com/Hanqing1996/Leetcode/blob/master/js/26.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9%E3%80%90%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)
* [27. 移除元素](https://github.com/Hanqing1996/Leetcode/blob/master/js/27.%20%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0%E3%80%90%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)
```
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 // 双指针，p指向不等于val的元素，q用于遍历 nums 数组（注意 p,q不是同步增长的，我们需要用 q来填充 nums[p]）
var removeElement = function(nums, val) {
    let p=0
    for(let q=0;q<nums.length;q++){
        if(nums[q]!=val){
            nums[p]=nums[q]
            p++
        }
    }
    // 数组已经遍历完，此时p即为原nums中不等于val的元素个数
    return p
};

```
