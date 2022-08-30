/**
https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
    // const URL = "https://api.openweathermap.org/data/2.5/weather";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e30764157msh86725a951ae557ap1fb9e4jsn9d04745f78a5',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(response =>{
                // console.log(response)
                showWeatherData(response)
            } )
        .catch(err => console.error(err));
  }
  
  const searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)
  }
  
 
  const showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerHTML = `${weatherData.location.name}-${weatherData.location.region}(${weatherData.location.country})`
    const tempSpan = document.getElementById('temp')
    const feelsLike = document.getElementById('min-temp')
    const humidity = document.getElementById('max-temp')
    const weatherType = document.getElementById('weather-type')

    weatherType.innerHTML = `${weatherData.current.condition.text}<img src="https:${weatherData.current.condition.icon}"/>`
    tempSpan.innerText = weatherData.current.temp_c
    feelsLike.innerText = weatherData.current.feelslike_c
    humidity.innerText = weatherData.current.humidity

    
  }
  
  