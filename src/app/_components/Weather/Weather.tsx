'use client'

import { useEffect, useState } from 'react';
import './styles.scss';
import { weatherServices } from '@/app/_services';
import { Weather } from '@/app/_types';

const Weather = () => {    
    const [ weather, setWeather ] = useState<Weather>();

    useEffect(() => {
        navigator?.geolocation.getCurrentPosition(async (position) => {
            const weather = await weatherServices().getWeather(position.coords.latitude, position.coords.longitude);
            setWeather(weather);    
            console.log(weather);
                    
        })
    }, []);
    

  return (
    <div className="weather-wrapper">
        <div className="image-icon">
            {
                weather?.weather[0].main.toLowerCase() == "rain" ?
                <div className="rain">
                    <svg version="1.1" id="rainclouds" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="297px" height="308.5px" viewBox="0 0 297 308.5" enableBackground="new 0 0 297 308.5" xmlSpace="preserve">
                        <g className="rain__raindrops">
                        <g className="raindrops--right">
                        <path className="rain__raindrops--1" d="M165.5,171.4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.2,16.8c-2.4,4.6-0.6,10.2,4,12.5
                        C157.6,177.7,163.2,176,165.5,171.4L165.5,171.4z M165.5,171.4"/>
                        <path className="rain__raindrops--2" d="M200,171.4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.1,16.8c-2.4,4.6-0.6,10.2,4,12.5
                        C192.1,177.7,197.7,176,200,171.4L200,171.4z M200,171.4"/>
                        <path className="rain__raindrops--3" d="M224.6,175.4c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.2,16.8
                        C218.3,167.4,220.1,173,224.6,175.4L224.6,175.4z M224.6,175.4"/>
                        <path className="rain__raindrops--4" d="M161,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.2-19.2,16.8
                        C154.6,201.9,156.4,207.5,161,209.9L161,209.9z M161,209.9"/>
                        <path className="rain__raindrops--5" d="M195.5,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.2-19.2,16.8
                        C189.1,201.9,190.9,207.5,195.5,209.9L195.5,209.9z M195.5,209.9"/>
                        </g>
                            <g className="raindrops--left">
                            <path className="rain__raindrops--6" d="M68.5,205.9c2.4-4.6,2.6-25.3,2.6-25.3S54.4,192.8,52,197.3c-2.4,4.6-0.6,10.2,4,12.5
                            C60.6,212.2,66.2,210.4,68.5,205.9L68.5,205.9z M68.5,205.9"/>
                            <path className="rain__raindrops--7" d="M103,205.9c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.1,16.8c-2.4,4.6-0.6,10.2,4,12.5
                            C95.1,212.2,100.7,210.4,103,205.9L103,205.9z M103,205.9"/>
                            <path className="rain__raindrops--8" d="M127.6,209.9c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.3-19.2,16.8
                            C121.3,201.9,123.1,207.5,127.6,209.9L127.6,209.9z M127.6,209.9"/>
                            <path className="rain__raindrops--9" d="M64,244.3c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3S62.4,227.2,60,231.8
                            C57.6,236.4,59.4,242,64,244.3L64,244.3z M64,244.3"/>
                            <path className="rain__raindrops--10" d="M98.5,244.3c4.6,2.4,10.2,0.6,12.5-4c2.4-4.6,2.6-25.3,2.6-25.3s-16.8,12.2-19.2,16.8
                            C92.1,236.4,93.9,242,98.5,244.3L98.5,244.3z M98.5,244.3"/>
                        </g>
                        </g>
                        <g className="rain__clouds">
                        
                            <path d="M142.5,127.8c0,0-31.4-6.7-31.4-36.7
                            s26.7-39.9,36.5-39.9s13.3,1.6,13.3,1.6s4.4-36.9,41.2-36.9s41.5,36.4,41.4,39.8c0,3.4,0.2,4.8-0.6,9.2c0,0,5.2-1.7,12.6-1.7
                            c10.8,0,30.1,8,30.1,34s-30.4,30.6-30.4,30.6H142.5z"/>
                            <path d="M46.2,164.7c0,0-31.4-6.7-31.4-36.7
                            s26.7-39.9,36.5-39.9s13.3,1.6,13.3,1.6s4.4-36.9,41.2-36.9s41.5,36.4,41.4,39.8c0,3.4,0.2,4.8-0.6,9.2c0,0,5.2-1.7,12.6-1.7
                            c10.8,0,30.1,8,30.1,34s-30.4,30.6-30.4,30.6H46.2z"/>
                        
                        </g>
                        <g className="rain__lightning">
                        <polygon points="125.436,171.75 111.1,195.781 133.401,190.239 111.1,235.75 145.6,180.6 126.35,185.6 138,171.75 
                            "/>
                        <polygon points="207.686,144.42 193.35,168.451 215.651,162.909 193.35,208.42 227.85,153.27 208.6,158.27 
                            220.249,144.42 "/>
                        </g>
                    </svg>
                </div>
                :
                <div className="sun"></div>
            }
        </div>
        <div className="item-title">
            <p>Weather</p>
        </div>
        <div className="detail-value">
            <p>{(weather?.main.temp)} ° C </p>
        </div>
    </div>
  );
};
export default Weather;
