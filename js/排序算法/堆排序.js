function swap(a,b,arr){
    arr[a]+=arr[b]
    arr[b]=arr[a]-arr[b]
    arr[a]=arr[a]-arr[b]
}

function heapSort(arr){
    let res=[]
    let heap=[,...arr]
    let len=arr.length
    while(len>0){
        // 构造大顶堆
        buildHeap(heap,len)
        // 将当前最大元素放入 res
        res.unshift(heap[1])
        swap(1,len,heap)
        len--
    }
    return res
}

function buildHeap(heap,len){
    for(let i=Math.floor(len/2);i>=1;i--){
        adjustHeap(heap,i,len)
    }
}

function adjustHeap(heap,i,len){
    while(true){
        let maxIndex=i
        if(i*2<=len&&heap[i*2]>heap[i])
            maxIndex=i*2
        if((i*2+1)<=len&&heap[i*2+1]>heap[maxIndex])
            maxIndex=i*2+1
        if(maxIndex===i)
            break
        swap(i,maxIndex,heap)
        i=maxIndex
    }
}

let arr=[4,2,8,3,5,1,6]
let res=heapSort(arr)
console.log(res)
