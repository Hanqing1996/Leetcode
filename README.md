[Java教程](https://www.liaoxuefeng.com/wiki/1252599548343744)
## for循环控制 
1
121
## 链表
2
## DP
121
## 时间复杂度
> 注意：时间复杂度指的是最坏情况下的时间复杂度，不是平均情况下的时间复杂度
#### 排序
* 归并排序：O(nlogn)
* 快排：O(nlogn) 
#### 查找
* 二分查找：O(logn)
### 二分查找
```
//一般二分查找函数，要求L有序（递增，递减），查找符合关键字的数组元素下标
int Binary_search(SqList L,ElemType key)
{
	int low = 0;int mid = 0;int high = L.length-1;
	while(low<=high)
	{
		mid = (low+high)/2;
 		if(key==L.data[mid])//L.data[mid]是要查找的关键字
		{
			return mid;
		}
		else if(key>L.data[mid])
		{
			low = mid+1;
		}
		else
		{
			high = mid-1;
		}
	}
	return -1;
```
852

