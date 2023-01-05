import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchShow, setSearchShow] = useState(false);
  const userExists = () => persons.some((el) => el.name.toLowerCase() === newName.toLowerCase());
  const handleNameChange=(event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)
  }
const addPerson=(event)=>{
  event.preventDefault();
  const newPerson={
    name: newName,
    number: newNumber
  }
  if(userExists()){
alert(`${newName} is already added to phonebook`)
  }else{
    setPersons(persons.concat(newPerson))
  }
  setNewName('')
  setNewNumber('')
}
const filteredPersons=persons.filter((el)=>{
 return(el.name.toLowerCase().includes(search.toLowerCase())||el.number.toLowerCase().includes(search.toLowerCase()))
})
const handleSearch=(e)=>{
  setSearch(e.target.value)
  if(e.target.value===""){
    setSearchShow(false);
  }
  else {
    setSearchShow(true);
  }
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <PersonForm
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons searchShow={searchShow}
      filteredPersons={filteredPersons}
      persons={persons} />
    </div>
  )
}

export default App