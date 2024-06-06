/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
const readline = require('readline-sync');

class Calculator {
  constructor(result){

    this.result = 0
  }

  add(input) {
    //const input = readline.question('Enter your input: ')
    //console.log(input)
    
    if (isNaN(input) || !Number.isInteger(parseFloat(input))){
      //console.log('returning to input')
      return this.add()
    }
    else {
      return this.result += Number(input)
    }
    

  }

  subtract(input) {
    //const input = readline.question('Enter your input: ')
    console.log(input)
    
    if (isNaN(input)|| !Number.isInteger(parseFloat(input))){
      console.log('returning to input')
      return this.subtract()
    }
    else {
      
        return this.result -= Number(input);
      }
      
    }
    

  

  multiply(input) {
    //const input = readline.question('Enter your input: ')
    //console.log(input);
    
    if (isNaN(input) || !Number.isInteger(parseFloat(input))){
      console.log('returning to input')
      return this.multiply()
    }
    else {

        return this.result *= Number(input)
      }
    
  }
    


  divide(input) {
    //const input = readline.question('Enter your input: ')
    //console.log(input)
    
    if (isNaN(input) || !Number.isInteger(parseFloat(input))){
      console.log('returning to input')
      return this.divide()
    }
    else {
      if (input ===0){
        throw new Error("Cannot divide by 0")
      
      }
      else {
      return this.result /= Number(input);
      }
    

    }
  }

  clear(){
    this.result = 0
  }

  getResult(){
    return this.result
  }

  calculate(str){
    console.log(str)
    str =str.replace(/ |[^0-9\-+/*%)()]/g,"");
    str = str.replace(/\)(\d)/g, ')*$1');
    str = str.replace(/(\d)\(/g, '$1*(');
    console.log(str)
    str = (str.replace('()', ''));
    str = str.replace(/\b0+(\d+)/g, '$1');
    console.log(str)

    console.log(str);

    if (str.includes('/0')){
      console.log(str);
      throw new Error("cannot divide by 0 ")
    }
    let ans = eval(str)
    console.log(ans)
    if(ans === Infinity||ans === 0)
      {
        throw new Error("cannot divide by 0")
      }
      this.result = ans
      return this.result
  } 
}

calc =new Calculator()

// console.log(calc.add(-5))

// console.log(calc.multiply(-3))

calc.calculate('    sdsf10 / cdfg  0  2 fgc +5(5*5(5/2)) ()  ')


module.exports = Calculator;
