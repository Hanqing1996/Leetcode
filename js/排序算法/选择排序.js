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
    let len=arr.length
    let side=0
    while(side<len){
        let minIndex=side
        for(let i=side;i<len;i++){
            if(arr[i]<arr[minIndex]){
                minIndex=i
            }
        }
        if(minIndex!==side){
            swap(minIndex,side,arr)
        }
        side++
    }
    return arr
}

let example=[12, 5, 13, 14, 11]
let res=selectionSort(example)
console.log(res)

