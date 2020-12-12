/*
首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾（交换位置）

重复第二步，直到所有元素均排序完毕。
*/

function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function selectionSort(arr){
    let side=0,end=arr.length-1

    let minIndex=0
    while(side<end){
        // 在无序数组中找最小值
        // 无序数组查找范围：side->end
        for(let i=side;i<=end;i++){
            if(arr[i]<arr[minIndex]){
                minIndex=i
            }
        }
        swap(side,minIndex,arr)
        // side 也是有序数组的终点位置
        side++
    }
    return arr
}

let arr=[5,6,3,8,7,2,4]
let res=selectionSort(arr)
console.log(res)
