/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 按 intervals[i][0] 递增排序
    intervals=intervals.sort((a,b)=>a[0]-b[0])

    let len=intervals.length
    let count=0
    let res=[intervals[0]]
    for(let i=1;i<len;i++){
        let current=intervals[i]

        /**
         * 区间可合并有两种可能
         * (1) [1,4],[2,5]=>[1,5]
         * (2) [1,4],[2,3]=>[1,4]
         * 即 
         */

        if(current[0]<=res[count][1])
            res[count][1]=Math.max(res[count][1],current[1])
        else{
            res.push(current)
            count+=1
        }
    }
    return res
};
