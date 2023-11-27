function reverseNumber(number){
    let reverseNum = 0;
    let digitSum = 0;
    while(number > 0){
        let digit = number % 10;
        reverseNum = (reverseNum * 10) + digit;
        digitSum += digit;
        number = Math.floor(number/10);
    } 

    console.log("reversed Number", reverseNum);
    console.log("digit sum", digitSum);
}

reverseNumber(12345)

