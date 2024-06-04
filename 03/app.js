function countSum(i) {
    var sum = 0;
    for(let l = 0; l <= i; l++) {
        console.log('l = ' + l);
        sum = sum + l;
        console.log('Sum = ' + sum);
    }
    console.log(sum);
    return sum;
}

countSum(4);