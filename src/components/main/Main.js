import React, { Component } from 'react';
import './Main.css';


class Main extends Component{

    state = {
        currentTime : '',
    }

    render(){

        //getting current time

        const {currentTime} = this.state;

        let time = new Date();
        const updateTime = () =>{
            let time = new Date();
            this.setState({currentTime : time});
        }
        setInterval(updateTime(),1000)
        
        
        //updating info background

        /*const infoBg = [
            "url('info1.png')",
            "url('info2.jpg')",
            "url('info3.jpeg')",
            "url('info4.jpeg')",
            "'url('info5.png')"
        ]
        
        const updateBg = () => {
            var bg = infoBg[Math.floor(Math.random()*infoBg.length)];
            var scdBg = infoBg[Math.floor(Math.random()*infoBg.length)];
            //setDynamicBg([bg,scdBg])
        }
        

        setInterval(updateBg(), 6000);*/


        return (

        <div className='homepage'>

            <h2 className="date">{currentTime.toString().slice(0,10)}, {currentTime.toString().slice(16,21)}</h2>
            <input type="text" className="place-search" placeholder='search your city' />


            <div className='overview'>
                <h2 className="overview-title">Overview</h2>
                <h1 className="quote">Check how the weather <br />is going in your place</h1>
                <div className='overview-weather'>
                    <h1 className="place">Berlin, Germany</h1>
                    <h2 className="place-weather">Sunny, 28°</h2>
                </div>
            </div>

            <div className='info-container'>
                <div className="info" id='info1' /*style={{backgroundImage : dynamicBg[0]}}*/></div>
                <div className="info" id='info2' /*style={{backgroundImage : dynamicBg[1]}}*/></div>
            </div>

        </div>
        )
    }
}


export default Main;