export const getWeather = async (city) => {
    
    const currentWeather = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=157bb866579cb1cf4510209e02ab59a2')

    return {
        type : 'GET_WEATHER',
        payload : currentWeather
    }
}