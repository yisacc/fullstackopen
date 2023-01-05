const Persons=({searchShow,filteredPersons,persons})=>{
    return(<>      {searchShow? filteredPersons.map((person,index)=><p key={index}>{person.name} {person.number}</p>):
    persons.map((person,index)=><p key={index}>{person.name} {person.number}</p>)}</>)
}
export default Persons