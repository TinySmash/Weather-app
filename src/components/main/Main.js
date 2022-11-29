import React, { useEffect, useState } from 'react';
import './Main.css';
import img1 from "./images/info1.png";
import img2 from "./images/info2.png";
import img3 from "./images/info3.jpeg";
import img4 from "./images/info4.jpeg";
import img5 from "./images/info5.png";
import img6 from "./images/info6.jpg";
import img7 from "./images/info7.jpeg";
import searchImg from "./images/search.png";
import { connect } from 'react-redux';
import { getWeather } from '../../actions/weatherActions';






function Main(props){
    

    const [currentTime, setCurrentTime] = useState('');
    const [cardBg, setCardBg] = useState([img1, img2]);
    const [currentWeather,setCurrentWeather] = useState({
        location : '',
        status : '',
        avgTemp : '',
        maxTemp: '',
        minTemp : '',
        windSpeed: '',

    })



    const card1 = document.getElementById('info1');
    const card2 = document.getElementById('info2');



    //getting current time
    
    
    let time = new Date();
    const updateTime = () =>{
        let time = new Date();
        setCurrentTime(time);
    }
    setInterval(updateTime,1000)
    
    
    //updating info background
    
    const infoBgArr = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7
    ]
    
    
    
    const updateBg = () => {
        setTimeout(() => {
            let bg = infoBgArr[Math.floor(Math.random()*infoBgArr.length)];
            let scdBg = infoBgArr[Math.floor(Math.random()*infoBgArr.length)];
            setCardBg([bg,scdBg]); 
            document.getElementById('info1').style.backgroundImage = `url(${cardBg[0]})`;
            document.getElementById('info2').style.backgroundImage = `url(${cardBg[1]})`;
        }, 12000);
    }

    useEffect(() => {
        updateBg();
    }, [cardBg])
    
    
    
    
    // TRYING THE API CALL




    const cityInput = document.querySelector('.place-search');
    let getCityWeather = async (e) => {
        e?.preventDefault();
        props.getWeather(cityInput.value);
        setCurrentWeather(props.weather.weather);
        document.querySelector('.city-name').innerText = cityInput.value.charAt(0).toUpperCase() + cityInput.value?.slice(1);
    }
    
    
    
    
    return (
        
        <div className='homepage'>

            <h2 className="date">{currentTime.toString().slice(0,10)}, {currentTime.toString().slice(16,21)}</h2>
            <form action="" className="search-city">
                <input type="text" className="place-search" placeholder='search your city'  />
                <button className="search-btn" onClick={(e) => {getCityWeather(e)}}></button>
            </form>

            <div className='overview'>
                <h2 className="overview-title">Overview</h2>
                <h1 className="quote">Check how the weather <br />is going in your place</h1>
                <div className='overview-weather'>
                    <h1 className='location'><span className="city-name"></span><span className="country"></span></h1>
                    <h2 className="place-weather"></h2>
                </div>
            </div>

            <div className='info-container'>
                <div className="info" id='info1' >
                    <h3 className='index'>status <span className='value' id="value1"></span></h3>
                    <h3 className='index'>Temp <span className='value' id="value2"></span></h3>
                    <h3 className='index'>Wind <span className='value' id="value3"></span></h3>
                    <h3 className='index'>Rain <span className='value' id="value4">none</span></h3>
                </div>
                <div className="info" id='info2' >
                    <h1 className='credits'>Done with OpenWeatherMap</h1>
                </div>
            </div>

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        weather : state.weather
    }
}


export default connect(mapStateToProps, { getWeather })(Main);