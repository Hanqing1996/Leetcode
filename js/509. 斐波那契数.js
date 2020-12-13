/**
 * @param {number} N
 * @return {number}
 */

var fib = function(N) {
    // 建立缓存表 
    let cache={0:0,1:1}
    for(let i=2;i<=N;i++){
        cache[i]=cache[i-1]+cache[i-2]
    }   
    return cache[N]
};
