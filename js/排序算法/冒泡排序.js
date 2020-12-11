function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}


// 冒泡排序
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        // 第一次排序后，最后一个元素就不需要比较了(一定是最大数，位置无需再变动)
        // j相当于从位置1开始遍历当前无序数组
        for(let j=1;j<arr.length-i;j++){
            let pre=arr[j-1]
            let current=arr[j]
            // 比较相邻两个元素大小
            if(pre>current)
                swap(j,j-1,arr)
        }
    }
}

const arr=[5,6,3,1,8,7,2,4]
bubbleSort(arr)
console.log(arr)
