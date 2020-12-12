
const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];

function swap(a,b,arr){
    let temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}


function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){

        let isSorted=true
        for(let j=1;j<arr.length-i;j++){
            let current=arr[j]
            let pre=arr[j-1]
            if(current<pre){
                swap(j,j-1,arr)
                isSorted=false
            }
        }
        // isSorted 用于标识此趟扫描过程中是否发生相邻元素的交换，若没有则说明数组已经有序，不必进行下趟扫描（但本趟是必要的，用于检测 isSorted）
        if(isSorted)
            return arr
    }
}


let res=bubbleSort(arr)
console.log(res)
