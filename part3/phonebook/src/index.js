require('dotenv').config()
const express =require("express");
const morgan = require('morgan')
const cors = require('cors')
const Phone=require('./models/phones')

const app=express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

app.get('/api/persons',(request,response,next)=>{
  Phone.find({})
  .then(result=>response.json(result))
  .catch(error=>next(error))
})

app.get('/info',(request,response)=>{
  Phone.find().exec((err,results)=>{
    response.send(`<p>Phonebook has info for ${results.length} people</p>
    <p>${(new Date()).toString()}</p>
    `)
  })}
)
app.get('/api/persons/:id',(request,response,next)=>{
  Phone.findById(request.params.id)
  .then(phone=>{
    if(phone){
      response.json(phone)
    }else{
      response.status(404).end()
    }
  })
  .catch(error=>next(error))
})
app.put('/api/persons/:id',(request,response,next)=>{
  const body = request.body

  const phone = {
    name: body.name,
    number: body.number,
  }

  Phone.findByIdAndUpdate(request.params.id, phone, { new: true })
    .then(updatedPhone => {
      response.json(updatedPhone)
    })
    .catch(error => next(error))
})
app.delete('/api/persons/:id',(request,response,next)=>{
  Phone.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
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
const phone=new Phone(
  {name:body.name,
  number:body.number
})
    phone.save().then(savedPhone=>response.json(savedPhone))
})
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)
const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})