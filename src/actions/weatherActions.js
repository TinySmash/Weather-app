export const getWeather = () =>async dispatch => {
    
    const currentWeather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=157bb866579cb1cf4510209e02ab59a2')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.warn('Wrong city name'))

    dispatch({
        type : 'GET_WEATHER',
        payload : currentWeather
    })
}