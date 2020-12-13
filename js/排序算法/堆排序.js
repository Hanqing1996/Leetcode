function heapSort(arr){
    let result=[] 

    // 建立一个大顶堆
    let heap=buildHeap(arr)
    let len=heap.length-1
    for(let i=0;i<len;i++){
        [heap[1],heap[len-i]]=[heap[len-i],heap[1]]
        //swap(heap,1,len-i)
        result.unshift(heap.pop())
        heap=buildHeap(heap)
    }
    return result
}




function buildHeap(arr){
    // 从最后一个非叶子节点开始,注意 arr[0]不用于存储数据，即arr对应完全二叉树的映射下标是直接从1开始的
    let heapSize=arr.length-1
    for(let i=Math.floor(heapSize/2);i>=1;i--){
        heapifyBig(arr,i,heapSize)
    }
    return arr
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

let example=[,12, 5, 13, 14, 11]
let result=heapSort(example)
console.log(result)
