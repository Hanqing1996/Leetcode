#### 分类
* 二分查找 
> 
* 双指针
>
* 链表
>
* 树
>
* 贪心
>




[执行出错：AddressSanitizer](https://blog.csdn.net/lym940928/article/details/89678727)

#### 关于二叉搜索树的遍历
* 中序遍历：结果一定为升序序列，运用详见[230. 二叉搜索树中第K小的元素](https://github.com/Hanqing1996/Leetocde/blob/master/230.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%ACK%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0.cpp)
* 前序遍历：结果序列的最后一个元素一定为树中最大元素
* 后序遍历：结果序列的第一个元素一定为树中最小元素
***
#### 关于指针
* 指针的用法
```
#include<iostream>
using namespace std;
int main()
{
    int arr[5]={2,3,4,5,6};
	int *p=&arr[0];
	int e=*p;
	cout<<e<<endl;//2
	*p=10;
	cout<<arr[0]<<endl;//10
	p++;
    cout<<*p<<endl;//3
	*(p+1)=*p;
	cout<<*p<<" "<<arr[2]<<" "<<*(p+1)<<endl;//3 3 3
	return 0;
}
/*
arr[0]不是一个值,而应该被看成是一个变量,这个变量对应一个内存区域,该区域存放变量的值2;

*p=&arr[0],意思是指针p指向了内存地址为arr[0]所在地址的内存区域;

e=*p意思是指针p读取所指向内存区域的值，并赋给e;

*p=10意思是将指针p所指向内存区域的值修改为10;
由于变量arr[0]对应内存区域固定,所以该内存区域存放的值被修改后,变量arr[0]的值也就被修改了;

p++意思是让p指向当前内存区域的相邻内存区域,此时指针p指向arr[1]所对应内存区域

*(p+1)=*p意思是,取p所指向的内存区域的值,将该值放入p所指向的内存区域的相邻内存区域
即arr[2]=arr[1];
*/
```
* 使用指针变量作为函数参数
```
#include <iostream>
using namespace std;
void change(int* p)
{
	*p=233;//将指针p所指向内存区域的值修改为233;
}
int main()
{
	int a=1;
	int* p=&a;//让指针p指向了内存地址为a所在地址的内存区域;
        change(p);
	printf("%d\n",a);
	return 0;
}
```
***
#### 关于递归
1. 不需要它出来->局部变量(main函数内部)，递归函数含该参数
2. 需要它出来->设为全局变量，递归函数不含该参数
3. 递归函数中计数器（引用）的用法详见[230. 二叉搜索树中第K小的元素](https://github.com/Hanqing1996/Leetocde/blob/master/230.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%AC%ACK%E5%B0%8F%E7%9A%84%E5%85%83%E7%B4%A0.cpp)

#### 空间复杂度



 
