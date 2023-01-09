const Weather=({selectedCountry,weather})=>{
    return(
        <>          <h1>Weather in {selectedCountry.capital[0]}</h1>
        <p>temperature {weather.main.temp} Celsius</p>
        <img alt="" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
        <p>wind {weather.wind.speed} m/s</p></>
    )
}

export default Weather