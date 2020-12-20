function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function insertionSort(arr){
    let len=arr.length
    for(let i=1;i<arr.length;i++){
        // [...已经有序的数组,要放入有序数组的新元素]，对这个数组从后往前进行扫描，比较相邻两个元素（若后面的元素小于前面，则进行交换，否则停止扫描）
        for(let j=i;j>=1;j--){
            if(arr[j]<arr[j-1])
                swap(j,j-1,arr)
            else
                break
        }
    }
    return arr
}

let arr=[5,3,1,9,2,8,7,10,6]
let res=insertionSort(arr)
console.log(res)


// 优化：二分插入排序
function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function binaryInsertSort(arr){
    let len=arr.length
    
    for(let i=1;i<arr.length;i++){

        let target=arr[i]
        let left=0,right=i

        while(left<=right){
            let mid=left+Math.floor((right-left)/2)
            if(arr[mid]<target)
                left=mid+1
            else
                right=mid-1      
        }

        for(let j=i;j>=left+1;j--){
            arr[j]=arr[j-1]
        }        
        arr[left]=target
    }
    return arr
}

let arr=[5,3,1,9,2,8,7,10,6]
let res=binaryInsertSort(arr)
console.log(res)
