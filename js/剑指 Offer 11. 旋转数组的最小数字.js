/**
 * @param {number[]} numbers
 * @return {number}
 */

/**
 * numbers[high]<numbers[mid],[3,4,5,1,2]说明最小数肯定位于 mid 之后=>low=mid+1
 * numbers[high]>numbers[mid],[5,1,2,3,4]说明最小数只可能在 mid 及 mid 之前=>high=mid
 * numbers[high]=numbers[mid],[7,7,7,2,7]和[7,2,7,7,7]都有可能，只能说明最小数在 high 之前=>high=high-1
 */
var minArray = function(numbers) {
    let low=0,high=numbers.length-1,mid
    while(low<=high){
        mid=low+Math.floor((high-low)/2)
        if(numbers[high]<numbers[mid])
            low=mid+1
        else if(numbers[high]>numbers[mid])
            high=mid
        else
            high=high-1
    }

    // 因为题目保证最小的数存在，所以 while 结束时,一定是 low=high=mid
    return numbers[mid]  
};
