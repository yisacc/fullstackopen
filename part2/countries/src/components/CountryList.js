const CountryList=({filteredCountries,setSelectedCountry})=>{
    return(
        <>           
          {filteredCountries.map((country,index)=>{ return(
            <div key={index}>
            {country.name.common}
            <input type="button" value="show" onClick={()=>setSelectedCountry(country)} />
            </div>
          )})}
        </>
    )
}

export default CountryList