/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */


/**
 * 就是找前k个最小的元素，很容易想到建立size为k的大顶堆
 */
var kClosest = function(points, K) {
    let hash={},temp=[],res=[]
    for(let i=0;i<points.length;i++){
        let sum=points[i][0]*points[i][0]+points[i][1]*points[i][1]

        // 因为可能存在 [0,1],[1,0]，k=2 的测试用例，所以这里 hash 要存数组
        if(hash[sum]===undefined){
            hash[sum]=i
        }else{
            if(typeof hash[sum]==='number'){
                hash[sum]=[hash[sum],i]
            }else{
                hash[sum]=[...hash[sum],i]
            }
        }
        temp.push(sum)
    }

    let arr=[,]
    for(let i=0;i<K;i++){
        arr.push(temp[i])
    }
    buildHeap(arr,K)
    

    for(let i=K;i<temp.length;i++){
        if(temp[i]<arr[1]){
            arr[1]=temp[i]
            buildHeap(arr,K)
        }
    }
    arr.shift()
    let count=0,i=0
    while(count<K){

        if(typeof hash[arr[i]]==='number'){
            res[count++]=points[hash[arr[i]]]
        }else{
            let items=hash[arr[i]]
            let index=0
            while(count<K&&index<items.length){
                res[count++]=points[items[index++]]
            }
        }
        i++
    }
    return res
};

// 建立大顶堆
function buildHeap(arr,k){
    for(let i=Math.floor(k/2);i>=1;i--){
        heapifyBig(arr,i,k)
    }
}


function heapifyBig(arr,i,heapSize){
    while (true) {
        var minIndex = i;
        if(2*i <= heapSize && arr[i] < arr[i*2] ) {
            minIndex = i*2;
        }
        if(2*i+1 <= heapSize && arr[minIndex] < arr[i*2+1] ) {
            minIndex = i*2+1;
        }
        if (minIndex === i) break;
        swap(arr, i, minIndex); // 交换 
        i = minIndex; 
    }
}

let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
