const avoidObstacles = (numArry) => {
    let highestNum = Math.max(...numArry);
    let result, i;

    for(i = 1; i < highestNum; i++ ){
        let foundDivider = numArry.some(num => num % i==0) 
        if (!foundDivider){   
            result = i;
            break;
        } 
    };
    return result;
}

const nums = [5,3,6,7,9];

avoidObstacles(nums);
