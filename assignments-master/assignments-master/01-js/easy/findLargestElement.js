/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    numbers = numbers.sort((a, b) => a - b);
    //console.log(numbers);
    let largest = numbers[0];
    for (i in numbers) {
        
        //console.log(i)
        largest = numbers[i];

    }

    return largest;
    
}

module.exports = findLargestElement;

//findLargestElement([15, 27, 8, 12])

