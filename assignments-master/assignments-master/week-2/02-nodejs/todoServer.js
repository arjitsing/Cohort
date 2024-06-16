/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();

app.use(bodyParser.json());

app.use(express.json());

/////////////////////GET////////////////////////////////

app.get('/todos', (req, res) => {

  fs.readFile('todos.json','utf-8',(err,data) => {
    const jsonData = JSON.parse(data);
    //console.log(jsonData)    
    res.status(200).send(jsonData)
      
    });
    // const new_jsonData = object .assign({},jsonData)
    // res.send(new_jsonData)
    
  })


app.get('/todos/:id', (req,res) => {
  let id = req.params.id
  //console.log(id)
  fs.readFile('todos.json','utf-8',(err,data) => {
    
    const jsonData = JSON.parse(data);
    for (obj of jsonData){
      //console.log(obj, 'type of obj.id', typeof obj.id)
      if (obj.id == id){
    
        res.send(obj)
      }

}
})
})
///////////////////////  POST    /////////////////////////////////


app.post('/todos', (req,res)=> {
  let data = fs.readFileSync('todos.json', 'utf8');


// Parse the JSON data
let jsonData = JSON.parse(data);

let newElement = req.body
console.log(typeof newElement, newElement )

//let newElement = {title: 'Hello World', description: false }



if (!newElement.hasOwnProperty('id')) {
    newElement.id = jsonData.length;
     
}
jsonData.push(newElement)
// jsonData = Object.assign(newElement,jsonData[jsonData.length])
fs.writeFileSync('todos.json', JSON.stringify(jsonData,null,2));
// jsonData.push({title: 'Hello World', description: false })

console.log(jsonData)
res.send('Successfully updated data')

})

///////////////    PUT      ////////////////////////////////

app.put('/todos/:id', (req,res) => {
  let id = req.params.id
  console.log(id)
  console.log(req.body)
  const data = fs.readFileSync('todos.json','utf-8');
  let fileWritten = false  
  let jsonData = JSON.parse(data);
  for (obj of jsonData){
    //console.log('inside for')
    //console.log(obj, 'type of obj.id', typeof obj.id)
    if (obj.id == id){
      console.log('inside if')
      obj.title = req.body.title
      obj.description = req.body.description
      //console.log(obj)
      
      
      fileWritten = true
      
    }
  }
  if (!fileWritten){
    res.status(404).send('id not present please enter again')
  }  
  else{
    fs.writeFileSync('todos.json', JSON.stringify(jsonData,null,2));
    res.status(200).send('Object updated successfully');
  }



    


})



app.delete('/todos')


app.listen(3002,() =>{
  console.log('Successfully started server 3002')
})
  
  module.exports = app;

