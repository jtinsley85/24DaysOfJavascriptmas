const arrayMaximalAdjacentDifference = (nums) => {
    //return if array contains non
    const containsOnlyNums = nums.every( x => isNaN(x) ? false : true);    
    if(!containsOnlyNums) { return 'Invalid argument. Array should contain only numbers.'};
    
    // cache some stuff
    const len = nums.length;
    let highest = 0,
        i;
        
    // do the work
    for (i = 0; i < len; i++){
        let current = nums[i];
        let adj = nums[i+1];
        let absDiff = Math.abs(current - adj);
        
        if(absDiff > 0) {
            (absDiff > highest) && (highest = absDiff);  
        }
    }
    
    return highest;
}