const adjacentElementsProduct = (numArry) => {
    const copy = [...numArry];
    const copyLen = copy.length;
    let highest = 0;
    let i = 0;
    
    while (i < copyLen) {
        let a = copy[i];
        let b = copy[i+1];
        let result = a * b;
        
        if (result > highest){
            highest = result;
        }
        i++
    }
    return highest;
}