const extractEachKth = (numArry, k) => {
    if (k <= 0) { return [] }; //make sure k is greater than 0
    const copy = [...numArry],
          loopCount = Math.floor(copy.length / k);
          
    let i;

    for(i = 0; i < loopCount; i++){
        //get idx of number to extract
        const section = copy.splice(0,k);
        const extractValue = section[section.length -1];
        const idxInOrigin = numArry.indexOf(extractValue);
        //remove from origin
        numArry.splice(idxInOrigin,1);
    };
    return numArry;
}
