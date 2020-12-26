
// Solution 1 = a little clunky. Uses parseInt, map, and 
const validTime = (str) => {
    const strNums = str.split(':');
    let strNumsLen = strNums.length;
    
    // Check for milliseconds & split again if needed
    const lastNum = strNums[strNumsLen -1];
    if(lastNum.indexOf('.') > 0) {
        let twoNums = lastNum.split('.');
        strNums.pop(strNums.indexOf(lastNum));
        strNums.push(...twoNums);
        // Update numsCount
        strNumsLen = strNums.length;
    }

    // Parse and check for invalids
    const resultArry = strNums.map( (num, i) => {
        const parsed = parseInt(num)
        if(parsed < 0) {return false};
        
        if (i === 0) {return (parsed > 24) ? false : true;} //check hours
        else if (i === 1) {return (parsed > 59) ? false : true;} //check mins
        else if (i === 2) {return (parsed > 59) ? false : true;} //check sec
        else if (i === 3) {return (parsed > 999) ? false : true;} //check mil
    });
    
    const isValid = (resultArry.indexOf(false) >= 0) ? false : true;
    return isValid;
}


// Solution 2 - slightly faster and less code, but took a while to get the regex together
// to matach all the cases I wanted to match.
const regValidTime = (str) => {
    const regex = /(?:^[1-9]|^[01]\d|^[2][0-3])\:(?:[0-5]\d$|[0-5]\d\:[0-5]\d$|[0-5]\d\:[0-5]\d\.\d{3}$)/gm
    return (str.match(regex)) ? true : false;
}

