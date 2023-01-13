const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://yisacc:${password}@cluster0.wub6z.mongodb.net/?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Phonebook = mongoose.model('Phonebook', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')
    if(process.argv.length > 3){
        const phonebook=new Phonebook({
            name: process.argv[3],
            number:process.argv[4]
        })
            return phonebook.save()
            .then(() => {
                console.log('phone saved!')
                return mongoose.connection.close()
              })
              .catch((err) => console.log(err))
    }else{
            return Phonebook.find({})
            .then((phones) => {
                phones.forEach(phone => {
                    console.log(phone)
                  })
                return mongoose.connection.close()
              })
              .catch((err) => console.log(err))
    }

  })
