var sortByBits = function(arr) {
    return arr.sort((a,b)=>{
        let aBin=a.toString(2).split('1')
        let bBin=b.toString(2).split('1')
        if(aBin.length!=bBin.length)
            return aBin.length-bBin.length   
        return a-b    
    })
};
