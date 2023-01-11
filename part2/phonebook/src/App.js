import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [searchShow, setSearchShow] = useState(false);
  const userExists = () => persons.some((el) => el.name.toLowerCase() === newName.toLowerCase());
  useEffect(()=>{
  personService.getAll().then(initialPersons=>{setPersons(initialPersons)})
  },[])
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
    const existingPerson=persons.find(person=>person.name===newName)
    const text=`${existingPerson.name} is already added to phonebook, replace the old number with the new one`
    if(window.confirm(text)===true){
      personService.update(existingPerson.id,newPerson)
      .then(returnedPerson=>setPersons(persons.map(person=>person.id!==existingPerson.id?person:returnedPerson)))
    }
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

const handleDelete=(id)=>{
  const deletedPerson=persons.find(person=>person.id===id)
  const text=`Delete ${deletedPerson.name}`
  if(window.confirm(text)===true){
    personService.remove(id).then(setPersons(persons.filter(person=>person.id!==id)))
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
      persons={persons}
      handleDelete={handleDelete}
      />
    </div>
  )
}

export default App