const express = require("express") ;
const {createTodo} = require("./types");
const { todo } = require("./db");
const cors = require("cors")




const app = express()

app.use(express.json());

app.use(cors());

// {
//     origin: "https//localhost:5173"
// }


app.post("/todo",async function(req, res) {

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)

    if (!parsePayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title : createPayload.title,
        description: createPayload.description,
        completed : false
    })

    res.json({
        msg : "Todo Created"
    })

    

})

app.get("/todos",async function(req,res) {

const find_todo =  await todo.find();

    res.json({
        todos : find_todo
    })

})

app.put("completed",async function(req,res){

    const updatePayload = req.body;
    const parsePayload = updatePayload.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }

    await todo.update({
        _id : req.body.id},{
            completed: true

    })
    res.json({
        msg : "Todo marked as closed"
    })

})

app.listen(3000,function(){
    console.log("Listening on port 3000")
})