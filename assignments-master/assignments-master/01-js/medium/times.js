/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function sumofn(n) {

    sum = 0
    let startTime = new Date();

    startTime = startTime.getSeconds();

    for (let i =0; i <=n; i++){
       sum = sum + i 
    }

    let endTime = new Date();

    endTime =endTime.getSeconds();


    return sum
}

function TotalTime(fn,n){
    startTime = new Date().getSeconds()
    fn(n)
    endTime = new Date().getSeconds()

    return `THe sum is ${sum} and total time taken to execute is ${endTime - startTime}secs`;


}



//startTiem = new Date().getSeconds()

//console.log(startTiem)

console.log(TotalTime(sumofn,1000000000))

//console.log(startTime)

//console.log(calculateTime(100000000))

//console.log(endTIme)


//console.log(endTime)

//console.log( 'total time taken to ececute ',endTime - startTime, 'secs')

