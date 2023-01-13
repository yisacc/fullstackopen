const { response } = require("express");
const express =require("express");
const morgan = require('morgan')
const app=express()

app.use(express.json())
app.use(express.static('build'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));


let persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
    response.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${(new Date()).toString()}</p>
    `)
})
app.get('/api/persons/:id',(request,response)=>{
    const id=Number(request.params.id)
    let person=persons.find(pers=>pers.id===id)
    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
})
app.delete('/api/persons/:id',(request,response)=>{
    const id=Number(request.params.id)
    persons=persons.filter(person=>person.id!==id)
    response.status(204).end()

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
      else if(persons.find(person=>person.name.toLowerCase()===body.name.toLowerCase())){
        return response.status(400).json({ 
            error: 'name must be unique' 
          })
      }
    const person={
        name:body.name,
        number:body.number,
        id:getRandomInt(100)
    }
    response.json(person)
})
const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})