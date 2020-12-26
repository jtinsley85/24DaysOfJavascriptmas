const sumOddFibNums = (num) => {
    let a = 1, b = 0, temp;
    let sumOfOdd = 0;
    
    while (b < num){
        temp = a;
        a = a + b;
        b = temp;
        
        //add to sum if odd
        (b % 2 === 1) && (b <= num) && (sumOfOdd += b);
    }
    return sumOfOdd;
}

console.log(sumOddFibNums(32))
