export const getWeather = (city) =>async dispatch => {
    let weather = null ;
    const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=157bb866579cb1cf4510209e02ab59a2`)
    .then(res => res.json())
    .then(data => {
        if(data.cod == 200){
            console.log(data);
            document.querySelector('.place-weather').innerText = `${data.weather?.[0].description}, ${((data.main.temp) - 273.15).toFixed(2)}°C`;
            document.querySelector('.country').innerText = data.sys.country;
            document.querySelector('#value1').innerText = data.weather?.[0].description;
            document.querySelector('#value2').innerText = `${((data.main.temp_min) - 273.15).toFixed(2)}°C /${((data.main.temp_max) - 273.15).toFixed(2)}°C `;
            document.querySelector('#value3').innerText = `${((data.wind.speed)*3.6).toFixed(1)} km/h`;
            return weather ={
                location : city,
                status : data.weather?.[0].description,
                avgTemp : ((data.main.temp) - 273.15).toFixed(2),
                maxTemp: ((data.main.temp_max) - 273.15).toFixed(2),
                minTemp : ((data.main.temp_min) - 273.15).toFixed(2),
                windSpeed: data.wind.speed
            }
        }
        else if(data.cod == 404){
            console.log(data);
            document.querySelector('.place-weather').innerText = 'City not found';
            document.querySelector('.country').innerText = '';
            document.querySelector('#value1').innerText = '';
            document.querySelector('#value2').innerText = '';
            document.querySelector('#value3').innerText = '';
            return weather ={
                location : null,
                status : null,
                avgTemp : null,
                maxTemp: null,
                minTemp : null,
                windSpeed: null
            }
        }
    })
    .catch(err => console.warn('Wrong city name'))

    dispatch({
        type : 'GET_WEATHER',
        payload : currentWeather
    })
}