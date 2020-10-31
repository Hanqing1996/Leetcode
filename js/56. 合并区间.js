/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * 参考：https://leetcode-cn.com/problems/merge-intervals/solution/chi-jing-ran-yi-yan-miao-dong-by-sweetiee/
 * 假设 a<c，则考虑 [a,b] 和 [c,d] 能不能合并，只需要看
 * 1.b<c：不能合并
 * 2.b>c：可以合并，合并后区间为[a,max(b,d)]  
 */
var merge = function(intervals) {
    // 排序，以保证 intervals 组成区间起点递增
    intervals=intervals.sort((interval1,interval2)=>interval1[0]-interval2[0])

    let res=[]
    let count=-1
    for(let i=0;i<intervals.length;i++){
        let current=intervals[i]
        if(res.length===0){
            res.push(current)
            count++
            continue
        }
        let last=res[count]
        // current[0] 肯定不小于 last[0]
        if(last[1]<current[0]){
            res.push(current)
            count++
        }
        else{
            res[count]=[last[0],Math.max(last[1],current[1])]
        }    
    }
    return res
};
