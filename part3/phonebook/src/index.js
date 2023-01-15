require('dotenv').config()
const express =require("express");
const morgan = require('morgan')
const cors = require('cors')
const Phone=require('./models/phones')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
app.get('/api/persons',(request,response)=>{
  Phone.find({}).then(result=>response.json(result))
})

app.get('/info',(request,response)=>{
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${(new Date()).toString()}</p>
    `)
})
app.get('/api/persons/:id',(request,response)=>{
  Phone.findById(request.params.id).then(phone=>{
    response.json(phone)
  })
})
app.delete('/api/persons/:id',(request,response)=>{
  Phone.findById(request.params.id).then(phone=>{
    phone.delete().then(result=>{
    response.status(204).end()
    })
  })

})

app.post('/api/persons',(request,response)=>{
    const body=request.body
     if(!body?.name){
        return response.status(400).json({ 
            error: 'name is missing' 
          })
      }else if(!body?.number){
        return response.status(400).json({ 
            error: 'number is missing' 
          })
      }
      // else if(persons.find(person=>person.name.toLowerCase()===body.name.toLowerCase())){
      //   return response.status(400).json({ 
      //       error: 'name must be unique' 
      //     })
      // }
const phone=new Phone(
  {name:body.name,
  number:body.number
})
    phone.save().then(savedPhone=>response.json(savedPhone))
})
const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})