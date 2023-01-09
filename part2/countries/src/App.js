import { useEffect, useState } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import Weather from "./components/Weather";
import Country from "./components/Country";
import CountryList from "./components/CountryList";


function App() {
  const [countries,setCountries]=useState([])
  const [search,setSearch]=useState('')
  const [filteredCountries,setFilteredCountries]=useState([])
  const [selectedCountry,setSelectedCountry]=useState()
  const [weather,setWeather]=useState()
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then((response)=>{
    setCountries(response.data)
    })
  },[])

  const handleSearch=(event)=>{
    setSearch(event.target.value)
    const matchedCountries=countries.filter((country)=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredCountries(matchedCountries)
  }
useEffect(()=>{
  if(filteredCountries.length===1){
    setSelectedCountry(filteredCountries[0])
  }
},[filteredCountries])

  useEffect(()=>{
    if(selectedCountry){
    const api_key = process.env.REACT_APP_API_KEY
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${selectedCountry?.capital[0]}&limit=${5}&appid=${api_key}`)
    .then((response)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${api_key}`)
    .then((response)=>{
    setWeather(response.data)
    })
    })

  }
  },[selectedCountry])
  return (
    <div className="App">
    <Filter 
    search={search} 
    handleSearch={handleSearch}
    />
      {filteredCountries.length>0 &&
      (filteredCountries.length<=10?
        <>
          <CountryList filteredCountries={filteredCountries} setSelectedCountry={setSelectedCountry}/>
          {
          selectedCountry&&weather &&
          <>
          <Country selectedCountry={selectedCountry} />
          <Weather selectedCountry={selectedCountry}
          weather={weather} />
          </>
}
        </>
    :
    <p>Too many matches, specify another filter</p>)
    }
    </div>
  );
}

export default App;
