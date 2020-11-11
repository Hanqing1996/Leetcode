#### 回溯

* [46. 全排列](https://github.com/Hanqing1996/Leetcode/blob/master/js/46.%20%E5%85%A8%E6%8E%92%E5%88%97%E3%80%90%E5%9B%9E%E6%BA%AF%E3%80%91.js)

  全排列

  ```js
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  var permute = function(nums) {
  
      let ans=[],res=[]
      let visited=Array(1024).fill(false) 
  
      let DFS=function(depth){
          if(depth===nums.length){
              res.push([...ans])
              return 
          }
  
          for(let i=0;i<nums.length;i++){
              if(!visited[nums[i]]){ // 用 visited[i]判断更好，因为不能保证 nums 内没有重复元素
                  ans[depth]=nums[i] 
                  visited[nums[i]]=true
                  DFS(depth+1)
                  visited[nums[i]]=false
              }
          }  
      }
  
      DFS(0)
      return res
  };
  
  
  // 结果
  // 横向看 [1->2->3]的递进是DFS不断深入到下层（DFS(1)->DFS(2)）执行的结果。
  // 横向看 [1, 2->3 ... ]的变化是DFS回退到上层（DFS(2)->DFS(1)）后继续之前的for循环，for 循环遍历的结果（DFS 回退后 i++,所以nums由2遍历到3）
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
  ```

  

  ```js
  // 对于 for 循环而言:
  // 回退（DFS(2)->DFS(1)），上次的 i+1开始继续，即切换上下文后继续之前未完成的循环
  // 进入（DFS(1)->DFS(2)），i从0开始
  
  DFS(0)
  ans[0]=1
  v[1]=true
              DFS(1)
              ans[1]=2 
              v[2]=true
                          DFS(2)
                          ans[2]=3
                          v[3]=true            
                                      DFS(3)
                                      res.push([1,2,3])
                          v[3]=false
              v[2]=false
              ans[1]=3 // 虽然 v[2] 变为 false 了，但是由于 for 循环的特性，i++后指向 nums[2] 即 3 了
              v[3]=true
                          DFS(2)
                          ans[2]=2
                          v[2]=true
                                      DFS(3)
                                      res.push([1,3,2])
                          v[2]=false
              v[3]=false
  v[1]=false
  ans[0]=2
  v[2]=true 
              DFS(1)
              ans[1]=1
              v[1]=true
                          DFS(2)
                          ans[2]=3
                          v[3]=true
                                      DFS(3)
                                      res.push([2,1,3])
                          v[3]=false            
              v[1]=false
              ans[1]=3
              v[3]=true   
                          DFS(2)
                          ans[2]=1
                          v[1]=true
                                      DFS(3)
                                      res.push([2,3,1])
  ......            
  ```

* [47. 全排列 II](https://github.com/Hanqing1996/Leetcode/blob/master/js/47.%20%E5%85%A8%E6%8E%92%E5%88%97%20II%E3%80%90%E5%9B%9E%E6%BA%AF%E3%80%91.js)

* [39. 组合总和](https://github.com/Hanqing1996/Leetcode/blob/master/js/39.%20%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E3%80%90%E5%9B%9E%E6%BA%AF%E3%80%91.js)

  > 回溯也可以解决重复选的问题

  ```js
  const combinationSum = (candidates, target) => {
      const res = [];
      const dfs = (start, temp, sum) => {
        if (sum >= target) {
          if (sum == target) {
            res.push([...temp]); // temp的拷贝
          }
          return;     // 结束当前递归
        }
        for (let i = start; i < candidates.length; i++) { // 枚举出选择，从start开始
          // 无论是背包还是回溯，剪枝条件是一样的
          if(sum+candidates[i]<=target){
              temp.push(candidates[i]);           // 加入“部分解”
              dfs(i, temp, sum + candidates[i]);  // 往下继续选择，同时sum累加上当前数字
              temp.pop();                        
          }
        }
      };
      dfs(0, [], 0);
      return res;
    };
  ```

---

#### 背包

* [39. 组合总和【选或不选】](https://github.com/Hanqing1996/Leetcode/blob/master/js/39.%20%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E3%80%90%E8%83%8C%E5%8C%85-%E9%80%89%E6%88%96%E4%B8%8D%E9%80%89%E3%80%91.js)

  要尽量剪枝，因为背包的边界条件是`index===len`，当已经发现目前路径不合理时，也必须多次DFS到达边界才能逐步回退。

  ```js
  /**
   * @param {number[]} candidates
   * @param {number} target
   * @return {number[][]}
   */
  var combinationSum = function(candidates, target) {
  
      let {length:len}=candidates
      let ans=[]
      let res=[]
      let DFS=function(index,sum,count){
  
          if(index===len){
              if(sum===target){
                  res.push([...ans.slice(0,count)])
              }
              return
          }
  
          // 选
          if(sum+candidates[index]<=target){
              ans[count]=candidates[index]
              DFS(index,sum+candidates[index],count+1)
          }
  
          // 不选
          DFS(index+1,sum,count)
      }
  
      DFS(0,0,0)
      return res
  };
  
  let candidates = [2,3,6,7], target = 7
  let res=combinationSum(candidates,target)
  console.log(res)                                                           
  ```

  ```js
  target=7
              
  DFS(0,0,0)
  ans[0]=2
  sum=0+2
          DFS(0,2,1)
          ans[1]=2
          sum=2+2
                      DFS(0,4,2)
                      ans[2]=2
                      sum=4+2
                                  DFS(0,6,3)
                                  ans[3]=2
                                  sum=6+2
  											// 这里已经发现 [2,2,2,2] 这条路径不合理，但是仍然要多次 DFS 到达边界(index===len)才能回退
                                              DFS(0,8,4)
                                              !8<target 
                                                          DFS(1,8,4)
                                                          !8<target
                                                                      DFS(2,8,4)
                                                                      !8<target
                                                                                  DFS(3,8,4)
                                                                                  !8<target
                                                                                              DFS(4,8,4)
                                                                                              4===len
                                                                                              return
                                                                                  over    
                                                                      over
                                                          over
                                              over
                                  DFS(1,6,3)
                                  ans[3]=3
                                  sum=6+3
                                              DFS(1,9,4)
                                              !9<target
                                                          DFS(2,9,4)
                                                          !9<target
                                                                      DFS(3,9,4)
                                                                      !9<target
                                                                                  DFS(4,9,4)
                                                                                  4===len
                                                                                  return    
                                                                      over
                                                          over
                                              over
                                  over  
                      DFS(1,4,2)
                      ans[2]=3
                      sum=4+3
                                  DFS(1,7,3)
                                  !7<target
                                              DFS(2,7,3)
                                              !7<target                
                                                          DFS(3,7,3)
                                                          !7<target   
                                                                      DFS(4,7,3)
                                                                      4===len
                                                                      res.push([2,2,3])
                                                                      return
  ...                                                                    
  ```

  

---

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

* Math.floor

  ```js
  let n=9
  Math.floor(n/2) // 4;注意 9/2=4.5
  ```

* map

  [451. 根据字符出现频率排序](https://github.com/Hanqing1996/Leetcode/blob/master/js/451.%20%E6%A0%B9%E6%8D%AE%E5%AD%97%E7%AC%A6%E5%87%BA%E7%8E%B0%E9%A2%91%E7%8E%87%E6%8E%92%E5%BA%8F%E3%80%90js-Map%E3%80%91)

* splice,unshift

  [189. 旋转数组](https://github.com/Hanqing1996/Leetcode/blob/master/js/189.%20%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%E3%80%90splice%2Cunshift%E3%80%91.js)

* parseInt

  [8. 字符串转换整数 (atoi)](https://github.com/Hanqing1996/Leetcode/blob/master/js/8.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2%E6%95%B4%E6%95%B0%20(atoi)%E3%80%90parseInt%E3%80%91.js)

* split

  [71. 简化路径](https://github.com/Hanqing1996/Leetcode/blob/master/js/71.%20%E7%AE%80%E5%8C%96%E8%B7%AF%E5%BE%84%E3%80%90js-split%2C%E6%A0%88%E3%80%91.js)

  []()

* 【数组，字符串】indexOf

  [316. 去除重复字母](https://github.com/Hanqing1996/Leetcode/blob/master/js/316.%20%E5%8E%BB%E9%99%A4%E9%87%8D%E5%A4%8D%E5%AD%97%E6%AF%8D%E3%80%90%E6%A0%88%E3%80%91.js)

* sort

  [1356. 根据数字二进制下 1 的数目排序](https://github.com/Hanqing1996/Leetcode/blob/master/js/1356.%20%E6%A0%B9%E6%8D%AE%E6%95%B0%E5%AD%97%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%8B%201%20%E7%9A%84%E6%95%B0%E7%9B%AE%E6%8E%92%E5%BA%8F%E3%80%90js-sort%E3%80%91.js)

  ```js
  arr.sort([compareFunction])
  ```

  - 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；

  - 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；

  - 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前。

  [56. 合并区间](https://github.com/Hanqing1996/Leetcode/blob/master/js/56.%20%E5%90%88%E5%B9%B6%E5%8C%BA%E9%97%B4%E3%80%90js-sort%E3%80%91.js)

  [179. 最大数](https://github.com/Hanqing1996/Leetcode/blob/master/js/179.%20%E6%9C%80%E5%A4%A7%E6%95%B0%E3%80%90%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%8E%92%E5%BA%8F%E3%80%91.js)

* toString 

  * 十进制转二进制

    ```js
    let num=8
    let bin=num.toString(2) // 8 的二进制表达为 1000
    let numOfOne=bin.split('1') // 计算二进制表达式中1的个数
    ```

    

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
* [622. 设计循环队列](https://github.com/Hanqing1996/Leetcode/blob/master/js/622.%20%E8%AE%BE%E8%AE%A1%E5%BE%AA%E7%8E%AF%E9%98%9F%E5%88%97%E3%80%90%E9%98%9F%E5%88%97%E3%80%91.js)
* [641. 设计循环双端队列](https://github.com/Hanqing1996/Leetcode/blob/master/js/641.%20%E8%AE%BE%E8%AE%A1%E5%BE%AA%E7%8E%AF%E5%8F%8C%E7%AB%AF%E9%98%9F%E5%88%97%E3%80%90%E9%98%9F%E5%88%97%E3%80%91.js)

---

#### 设计

* [284. 顶端迭代器](https://github.com/Hanqing1996/Leetcode/tree/master/js)

* [341. 扁平化嵌套列表迭代器](https://github.com/Hanqing1996/Leetcode/blob/master/js/341.%20%E6%89%81%E5%B9%B3%E5%8C%96%E5%B5%8C%E5%A5%97%E5%88%97%E8%A1%A8%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E8%AE%BE%E8%AE%A1%E3%80%91.js)

---

#### 贪心

> 或者说是决策思维（比如数组出现最多/数值最小的元素，怎样才能符合题意处理之类）更好

> 大多数需要去模拟问题的解决流程(分饼干之类),"模拟"的过程也是难点之一

* [621. 任务调度器](https://github.com/Hanqing1996/Leetcode/blob/master/js/621.%20%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E5%99%A8%E3%80%90%E8%B4%AA%E5%BF%83%E3%80%91.js)

  > 关注数组中出现最多的元素

* [767. 重构字符串](https://github.com/Hanqing1996/Leetcode/blob/master/js/767.%20%E9%87%8D%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E8%B4%AA%E5%BF%83%E3%80%91.js)

* [1296. 划分数组为连续数字的集合](https://github.com/Hanqing1996/Leetcode/blob/master/js/1296.%20%E5%88%92%E5%88%86%E6%95%B0%E7%BB%84%E4%B8%BA%E8%BF%9E%E7%BB%AD%E6%95%B0%E5%AD%97%E7%9A%84%E9%9B%86%E5%90%88%E3%80%90%E8%B4%AA%E5%BF%83%E3%80%91.js)

  > 关注数组中值最小的元素

* [12. 整数转罗马数字](https://github.com/Hanqing1996/Leetcode/blob/master/js/12.%20%E6%95%B4%E6%95%B0%E8%BD%AC%E7%BD%97%E9%A9%AC%E6%95%B0%E5%AD%97%E3%80%90%E8%B4%AA%E5%BF%83%E3%80%91.js)

  > 先处理500/50/5，再处理100/10/1

* [455. 分发饼干](https://github.com/Hanqing1996/Leetcode/blob/master/js/455.%20%E5%88%86%E5%8F%91%E9%A5%BC%E5%B9%B2%E3%80%90%E8%B4%AA%E5%BF%83%E3%80%91.js)

  > 重点在于模拟分饼干的过程

---

#### TODO

#### [44. 通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)

#### [10. 正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)

---

#### 字符串

* [剑指 Offer 05. 替换空格【正则】](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2005.%20%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC%E3%80%90%E6%AD%A3%E5%88%99%E3%80%91.js)
* [58. 最后一个单词的长度【split-正则】](https://github.com/Hanqing1996/Leetcode/blob/master/js/58.%20%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%8D%95%E8%AF%8D%E7%9A%84%E9%95%BF%E5%BA%A6%E3%80%90split-%E6%AD%A3%E5%88%99%E3%80%91.js)
* [179. 最大数](https://github.com/Hanqing1996/Leetcode/blob/master/js/179.%20%E6%9C%80%E5%A4%A7%E6%95%B0%E3%80%90%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%8E%92%E5%BA%8F%E3%80%91.js)

* [415. 字符串相加](https://github.com/Hanqing1996/Leetcode/blob/master/js/415.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E5%8A%A0.js)

题目不许用 parseInt

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i=num1.length-1
    let j=num2.length-1
    let carry=0
    let ans=[]

    while(i>=0||j>=0||carry!=0){
        i>=0&&(carry+=(num1[i--]-'0'))
        j>=0&&(carry+=(num2[j--]-'0'))
        ans.push(carry%10)
        carry=Math.floor(carry/10)
    }
    return ans.reverse().join("") 
};
```

---

#### 链表

* [剑指 Offer 06. 从尾到头打印链表](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2006.%20%E4%BB%8E%E5%B0%BE%E5%88%B0%E5%A4%B4%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8%E3%80%90%E9%93%BE%E8%A1%A8%E3%80%91.js)

  ```js
  var reversePrint = function(head) {
      let ans=[]
      let current=head
      // 遍历链表
      while(current){
          ans.unshift(current.val)
          current=current.next
      }
      return ans
  };
  ```

* [剑指 Offer 18. 删除链表的节点](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2018.%20%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E8%8A%82%E7%82%B9%E3%80%90%E9%93%BE%E8%A1%A8%E3%80%91.js)

* [剑指 Offer 22. 链表中倒数第k个节点【双指针】](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2022.%20%E9%93%BE%E8%A1%A8%E4%B8%AD%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E8%8A%82%E7%82%B9%E3%80%90%E9%93%BE%E8%A1%A8-%E5%8F%8C%E6%8C%87%E9%92%88%E3%80%91.js)

* [剑指 Offer 24. 反转链表](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2024.%20%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8%E3%80%90%E9%93%BE%E8%A1%A8%E3%80%91.js)

* [剑指 Offer 35. 复杂链表的复制【深度拷贝链表】](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2035.%20%E5%A4%8D%E6%9D%82%E9%93%BE%E8%A1%A8%E7%9A%84%E5%A4%8D%E5%88%B6%E3%80%90%E9%93%BE%E8%A1%A8-%E6%B7%B1%E5%BA%A6%E6%8B%B7%E8%B4%9D%E9%93%BE%E8%A1%A8%E3%80%91.js)

* [剑指 Offer 52. 两个链表的第一个公共节点](https://github.com/Hanqing1996/Leetcode/blob/master/js/%E5%89%91%E6%8C%87%20Offer%2052.%20%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%AC%E5%85%B1%E8%8A%82%E7%82%B9%E3%80%90%E9%93%BE%E8%A1%A8-%E7%9B%B8%E4%BA%A4%E3%80%91.js)

---

#### codeTop

* 179
* 
