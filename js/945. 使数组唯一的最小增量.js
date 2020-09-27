/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {

    // 先排序，再遍历并逐个调整，以保证后面的数总比前面的大
    let Asorted=A.sort((a,b)=>a-b)

    let pre=Asorted[0]
    let increment=0
    for(let i=1;i<Asorted.length;i++){
        if(pre>=Asorted[i]){
            let currentIncrement=pre+1-Asorted[i]
            increment+=currentIncrement
            Asorted[i]=pre+1
        }
        pre=Asorted[i]
    }
    return increment

};
