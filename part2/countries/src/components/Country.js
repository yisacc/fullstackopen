const Country=({selectedCountry})=>{
    return(
        <>           
         <h1>{selectedCountry.name.common}</h1>
        <p>capital {selectedCountry.capital[0]}</p>
        <p>area {selectedCountry.area}</p>
        <h1>languages:</h1>
        <ul>
        {Object.keys(selectedCountry.languages).map((key)=><li key={key}>{selectedCountry.languages[key]}</li>)}
        </ul>
        <img alt="" src={selectedCountry.flags.png} />
        </>
    )
}

export default Country