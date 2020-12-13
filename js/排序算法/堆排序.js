
function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function heapSort(arr){

    arr=[,...arr]

    // 建立一个大顶堆
    buildHeap(arr)

    console.log(arr)

    let len=arr.length-1

    let result=[]

    // 总共要取len个元素放入 result
    for(let i=0;i<len;i++){
        swap(1,len-i,arr)
        result.unshift(arr.pop())
        buildHeap(arr)
    }
    return result
}

function buildHeap(arr){
    let heapSize=arr.length-1
    for(let i=Math.floor(heapSize/2);i>=1;i--){
        heapifyBig(i,arr,heapSize)
    }
}

function heapifyBig(i,arr,heapSize){
    while(true){
        let maxIndex=i
        if(i*2<=heapSize&&arr[i*2]>arr[i]){
            maxIndex=i*2
        }
        if(i*2+1<=heapSize&&arr[i*2+1]>arr[maxIndex]){
            maxIndex=i*2+1
        }
        if(maxIndex===i)
            break
        swap(maxIndex,i,arr)
        i=maxIndex    
    }
}


let example=[12, 5, 13, 14, 11]
let res=heapSort(example)
console.log(res)
