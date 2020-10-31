#### DP

* dp[0]的情况

> 为了让边界情况也能满足通式而设置的边界值，不具有实际意义

#### 单调栈

* [496. 下一个更大元素 I](https://github.com/Hanqing1996/Leetcode/blob/master/js/496.%20%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0%20I%E3%80%90%E5%8D%95%E8%B0%83%E6%A0%88%E3%80%91.js)
* [503. 下一个更大元素 II](https://github.com/Hanqing1996/Leetcode/blob/master/js/503.%20%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0%20II%E3%80%90%E5%8D%95%E8%B0%83%E6%A0%88%E3%80%91.js)
* [739. 每日温度](https://github.com/Hanqing1996/Leetcode/blob/master/js/739.%20%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6%E3%80%90%E5%8D%95%E8%B0%83%E6%A0%88%E3%80%91.js)



根据经验「找出右边第 1 个严格大于自己的元素的下标」，这件事情可以通过「栈」完成计算，并且维护这个栈的单调性；

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

```js
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

---

#### 堆排序

* [215. 数组中的第K个最大元素](https://github.com/Hanqing1996/Leetcode/blob/master/js/215.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%ACK%E4%B8%AA%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0%E3%80%90%E5%A0%86%E6%8E%92%E5%BA%8F%E3%80%91)

* [973. 最接近原点的 K 个点](https://github.com/Hanqing1996/Leetcode/blob/master/js/973.%20%E6%9C%80%E6%8E%A5%E8%BF%91%E5%8E%9F%E7%82%B9%E7%9A%84%20K%20%E4%B8%AA%E7%82%B9%E3%80%90%E5%A0%86%E6%8E%92%E5%BA%8F%E3%80%91.js)


#### 原地哈希

> 不用到任何额外空间

* [41. 缺失的第一个正数](https://github.com/Hanqing1996/Leetcode/blob/master/js/41.%20%E7%BC%BA%E5%A4%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%AD%A3%E6%95%B0%E3%80%90%E5%8E%9F%E5%9C%B0hash%E3%80%91.js)
* [442. 数组中重复的数据](https://github.com/Hanqing1996/Leetcode/blob/master/js/442.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E9%87%8D%E5%A4%8D%E7%9A%84%E6%95%B0%E6%8D%AE%E3%80%90%E5%8E%9F%E5%9C%B0hash%E3%80%91.js)
* [88. 合并两个有序数组](https://github.com/Hanqing1996/Leetcode/blob/master/js/88.%20%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E3%80%90%E5%8E%9F%E5%9C%B0%E6%8E%92%E5%BA%8F%E3%80%91.js)



js 的 hash

```js
let remain={}
let s="cbacdcbc"

for(let i=0;i<s.length;i++){
    remain[s[i]]=remain[s[i]]!==undefined?remain[s[i]]+1:1
}

console.log(remain) // { c: 4, b: 2, a: 1, d: 1 }
```

---

#### 数组遍历-双指针

p实际是用于构造符合题意的新数组。q用于遍历原先数组，并填充p

* [26. 删除排序数组中的重复项](https://github.com/Hanqing1996/Leetcode/blob/master/js/26.%20%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9%E3%80%90%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)
* [27. 移除元素](https://github.com/Hanqing1996/Leetcode/blob/master/js/27.%20%E7%A7%BB%E9%99%A4%E5%85%83%E7%B4%A0%E3%80%90%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)
* [283. 移动零](https://github.com/Hanqing1996/Leetcode/blob/master/js/283.%20%E7%A7%BB%E5%8A%A8%E9%9B%B6%E3%80%90%E6%95%B0%E7%BB%84%E9%81%8D%E5%8E%86-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)

```js
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

---

#### js 特性

* map

  [451. 根据字符出现频率排序](https://github.com/Hanqing1996/Leetcode/blob/master/js/451.%20%E6%A0%B9%E6%8D%AE%E5%AD%97%E7%AC%A6%E5%87%BA%E7%8E%B0%E9%A2%91%E7%8E%87%E6%8E%92%E5%BA%8F%E3%80%90js-Map%E3%80%91)

* splice,unshift

  [189. 旋转数组](https://github.com/Hanqing1996/Leetcode/blob/master/js/189.%20%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%E3%80%90splice%2Cunshift%E3%80%91.js)

* parseInt

  [8. 字符串转换整数 (atoi)](https://github.com/Hanqing1996/Leetcode/blob/master/js/8.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2%E6%95%B4%E6%95%B0%20(atoi)%E3%80%90parseInt%E3%80%91.js)

* split

  [71. 简化路径](https://github.com/Hanqing1996/Leetcode/blob/master/js/71.%20%E7%AE%80%E5%8C%96%E8%B7%AF%E5%BE%84%E3%80%90js-split%2C%E6%A0%88%E3%80%91.js)

* 【数组，字符串】indexOf

  [316. 去除重复字母](https://github.com/Hanqing1996/Leetcode/blob/master/js/316.%20%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E5%AD%97%E6%AF%8D%E3%80%90%E6%A0%88%E3%80%91.js)

* sort

  [56. 合并区间](https://github.com/Hanqing1996/Leetcode/blob/master/js/56.%20%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4%E3%80%90js-sort%E3%80%91.js)

---

#### 栈

> 同一端进出

我们可以用 js 的数组模拟栈（push，pop正好满足栈的同端进出要求）

```js
let stack=[]
stack.push(1)
stack.push(2)
stack.push(3) // [1,2,3]
stack.pop()   // [1,2]
stack.pop()   // [1]
```

* [20. 有效的括号](https://github.com/Hanqing1996/Leetcode/blob/master/js/20.%20%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7%E3%80%90%E6%A0%88%E3%80%91.js)
* [71. 简化路径](https://github.com/Hanqing1996/Leetcode/blob/master/js/71.%20%E7%AE%80%E5%8C%96%E8%B7%AF%E5%BE%84%E3%80%90js-split%2C%E6%A0%88%E3%80%91.js)

* [155. 最小栈](https://github.com/Hanqing1996/Leetcode/blob/master/js/155.%20%E6%9C%80%E5%B0%8F%E6%A0%88%E3%80%90%E6%A0%88%E3%80%91.js)

* [316. 去除重复字母](https://github.com/Hanqing1996/Leetcode/blob/master/js/316.%20%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E5%AD%97%E6%AF%8D%E3%80%90%E6%A0%88%E3%80%91.js)
* [946. 验证栈序列](https://github.com/Hanqing1996/Leetcode/blob/master/js/946.%20%E9%AA%8C%E8%AF%81%E6%A0%88%E5%BA%8F%E5%88%97%E3%80%90%E6%A0%88%E9%81%93%E3%80%91.js)
* [1111. 有效括号的嵌套深度](https://github.com/Hanqing1996/Leetcode/blob/master/js/1111.%20%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7%E7%9A%84%E5%B5%8C%E5%A5%97%E6%B7%B1%E5%BA%A6%E3%80%90%E6%A0%88%E3%80%91.js)

#### 队列

> 一端只能入，另一端只能出

我们可以用js的数组模拟队列（用 shift，push 实现一端入，另一端出）

```js
let queen=[]
queen.push(1)
queen.push(2)
queen.push(3) // [1,2,3]
queen.shift() // [2,3]
queen.shift() // [3]
```

* [225. 用队列实现栈](https://github.com/Hanqing1996/Leetcode/blob/master/js/225.%20%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88%E3%80%90%E9%98%9F%E5%88%97%E3%80%91.js)

* [232. 用栈实现队列](https://github.com/Hanqing1996/Leetcode/blob/master/js/232.%20%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E3%80%90%E9%98%9F%E5%88%97%E3%80%91.js)

---

#### 设计

* [284. 顶端迭代器](https://github.com/Hanqing1996/Leetcode/tree/master/js)

* [341. 扁平化嵌套列表迭代器](https://github.com/Hanqing1996/Leetcode/blob/master/js/341.%20%E6%89%81%E5%B9%B3%E5%8C%96%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E8%AE%BE%E8%AE%A1%E3%80%91.js)

* 

---

#### 贪心

