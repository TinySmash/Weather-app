export const getWeather = (city) =>async dispatch => {
    let weather = null ;
    const currentWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=157bb866579cb1cf4510209e02ab59a2`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return weather = {
            location : city,
            status : data.weather?.[0].description,
            avgTemp : ((data.main.temp) - 273.15).toFixed(2),
            maxTemp: ((data.main.temp_max) - 273.15).toFixed(2),
            minTemp : ((data.main.temp_min) - 273.15).toFixed(2),
            windSpeed: data.wind.speed
        }
    })
    .catch(err => console.warn('Wrong city name'))

    dispatch({
        type : 'GET_WEATHER',
        payload : currentWeather
    })
}