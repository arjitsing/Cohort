//creating an http serevr 
// is express a node degault library? no its not you'll have to install it
 

const express = require("express")

const app =express();


var users = [{
  name : "Harkirat",
  kidneys: [{
    healthy: false
  }]
  }
];

app.use(express.json())


app.get("/",(req,res)=>{
  const johnKidneys = users[0].kidneys
  const numOfKidneys = johnKidneys.length
  //console.log(johnKidneys)
  let numberOfHealtyKidneys = johnKidneys.filter((i) =>{
    console.log(i)
    if (typeof i == 'object' && i.healthy){
      
      return true
    }
    else {

      if (i===undefined){
      
      console.log( 'no value present');
      
      }
    }
  })
  
  numberOfHealtyKidneys = numberOfHealtyKidneys.length
  const numberOfUnhealtyKidneys = numOfKidneys - numberOfHealtyKidneys
  res.json({numOfKidneys,numberOfHealtyKidneys,numberOfUnhealtyKidneys})
  
})


app.post("/", (req,res) => {

  console.log(typeof req.body, req.body)
  if (typeof req.body != 'object'){
    //console.log('inside first if')
    res.status(411).send('Incorrect input type, enter data in JSON format')
  
    console.log(req.body.entries())
    if(req.body.entries() === undefined)
    //  console.log('inside second if')
    //console.log(req.body.entries())
     {
      res.status(411).send('Incorrect input type, enter data in JSON format')

      
  } 
  }
  else {
    console.log('inside else')
    const isHealthy = req.body.isHealthy;
  
  
      users[0].kidneys.push(isHealthy)
  


      res.json({
        msg: "done"
      })
    
  }
}


)
//make the kindney healthy
app.put('/', (req,res) => {

  for (i of users[0].kidneys){
    if (!i.healthy) {
      //console.log(i)
      i.healthy = true
      res.send('Kidney changed successfully')
    }else{

      res.send('All kidneys are healthy no change required')

    }

    
  }

  

} )

app.delete('/', (req,res) => {
  users[0].kidneys.filter((i)=> {
    if(!i.healthy){
      users[0].kidneys.splice(users[0].kidneys.indexOf(i),1)
      res.send('Removed the unhealthy kidney successfully')
    } else {
      res.send('No need for removal all kidneys healthy')
    }
  })

})


app.listen(3001)
