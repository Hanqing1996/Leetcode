/**
 * @param {number} n
 * @return {number}
 */

/**
 * 有价值的因子只有2和3，因为4 = 2+2=2*2分不分都一样了，而5以后的数都需要进一步做分解才更优。而且同样的n，分出3比分出2更优(比如3*3大于2*2*2)，所以尽可能分出更多的3就是解法，当分出若干3后，n≤4时，此时n若为2，为3，为4，直接乘就都是最优解了。
 */

var cuttingRope = function(n) {
    if(n===2)
        return 1
    if(n===3)
        return 2
    if(n===4)
        return 4
    let mul=1
    while(n>4){
        n-=3
        mul=(mul*3)%1000000007
    }  
    return n*mul%1000000007
};
