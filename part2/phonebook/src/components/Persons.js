const Persons=({searchShow,filteredPersons,persons,handleDelete})=>{
    return(<> 
    {searchShow? filteredPersons.map((person,index)=>{return (
    <p key={index}>{person.name} {person.number}
    <input type="button" value="delete" onClick={()=>handleDelete(person.id)} />
    </p>
    
    )}):
    persons.map((person,index)=>{return( 
    <p key={index}>{person.name} {person.number}
    <input type="button" value="delete" onClick={()=>handleDelete(person.id)} />
    
    </p>
    )}
   )}</>)
}
export default Persons