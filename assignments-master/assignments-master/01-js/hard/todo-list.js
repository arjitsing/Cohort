/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // if (Array.isArray(todos)) {
    //   this.todos = []
    // }
    // else {
    //   throw new Error('Input must be an array');
    // }
    
    this.todos = []
    
  }
  
  add(todo) {

    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if(indexOfTodo<this.todos.length) {
      this.todos.splice(indexOfTodo,1);
    }
  }

  updatewithExistingElements(index, updatedTodo){
    if(index<this.todos.length) {
    this.todos.splice(index,0,updatedTodo);
    }
  }

  update(index, updatedTodo){
    if(index<this.todos.length) {
      this.todos[index] = updatedTodo;
      }

  }


  getAll() {
    return this.todos;
  }
  get(indexOfTodo){
    
    if(indexOfTodo<this.todos.length) {
      return this.todos[indexOfTodo];
    }
    else {
      return null;
    }
  }

  clear(){
    this.todos.forEach(element => {
      //console.log(element)
      this.todos.shift()
      //this.getAll()
    
    })
    this.todos.pop();

  }



  

}
/*




to.add(4)
to.add(5)
to.add(6)
to.getAll()

to.clear()

to.getAll()

//to.getAll()
*/
module.exports = Todo;

//to = new Todo()