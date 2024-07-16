

export function Todos({todos}){
    // console.log(typeof todos)
    return<div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>1
                <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>

        })}
    </div>}