import axios from "axios";
import { z } from "zod";
import { fetchLocationData } from "./location.ts";
import { fetchWeatherData } from "./weatherapi.ts";
import { useState } from 'preact/hooks';
import type { CurrentWeather } from "./weatherapi.ts";
import type { LocationInfo } from "./location.ts";
import SEO from '../../SEO.jsx'
import { useIntl } from 'react-intl';

export default function Weather() { 
  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
  const GEOCODE_API_URL = "https://geocode.maps.co/search";
  const HTTP_CLIENT = axios;

  const [searchLocation, setSearchLocation] = useState<string>('');
  const [currentLocation, setCurrentLocation] = useState<LocationInfo>();
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();
  const [Err, setErr] = useState<boolean>(false);

  const weatherCodes: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow fall",
    73: "Moderate snow fall",
    75: "Heavy snow fall",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Moderate thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  const weatherCodeToImage = (code: number): string => {
    switch (code) {
      case 0: return "/weather_svg/clear.svg"
      case 1: return "/weather_svg/clear.svg";
      case 2: return "/weather_svg/cloudy.svg";
      case 3: return "/weather_svg/overcast.svg";
      case 45: return "/weather_svg/fog.svg";
      case 48: return "/weather_svg/fog.svg";
      case 51: return "/weather_svg/drizzle.svg";
      case 53: return "/weather_svg/drizzle.svg";
      case 55: return "/weather_svg/drizzle.svg";
      case 56: return "/weather_svg/drizzle.svg";
      case 57: return "/weather_svg/drizzle.svg";
      case 61: return "/weather_svg/rain.svg";
      case 63: return "/weather_svg/rain.svg";
      case 65: return "/weather_svg/rain.svg";
      case 66: return "/weather_svg/rain.svg";
      case 67: return "/weather_svg/rain.svg";
      case 71: return "/weather_svg/snow.svg";
      case 73: return "/weather_svg/snow.svg";
      case 75: return "/weather_svg/snow.svg";
      case 77: return "/weather_svg/snow.svg";
      case 80: return "/weather_svg/rain.svg";
      case 81: return "/weather_svg/rain.svg";
      case 82: return "/weather_svg/rain.svg";
      case 85: return "/weather_svg/snow.svg";
      case 86: return "/weather_svg/snow.svg";
      case 95: return "/weather_svg/thunderstorm.svg";
      case 96: return "/weather_svg/thunderstorm.svg";
      case 99: return "/weather_svg/thunderstorm.svg";
      default: return "/weather_svg/info.svg";
    }
  };
  
  const locationSchema = z.object({
    location: z.string(),
  });
  
  async function getWeather(request: string) {
    try {
      if(request.length <= 3){
        setErr(true)
        setCurrentLocation(undefined)
        return
      };
      const locationInfo = await fetchLocationData(HTTP_CLIENT, GEOCODE_API_URL, request);
      setCurrentLocation(locationInfo)
      const weatherInfo = await fetchWeatherData(HTTP_CLIENT, WEATHER_API_URL, locationInfo.lat, locationInfo.lon);
      setCurrentWeather(weatherInfo)
    } catch (e) {
      console.error(e)
      setErr(true)
      setCurrentLocation(undefined)
    }
  };
  const intl = useIntl();
  return (
    <>
      <SEO
        title={intl.formatMessage({id:"Weather_Title", defaultMessage:"Weather conditions for any location on earth"})}
        description={intl.formatMessage({id:"Weather_Desc", defaultMessage:"Chech weather information at any location on Earth"})}
        type={intl.formatMessage({id:"Weather_Type", defaultMessage:"website"})}
        keywords={intl.formatMessage({id:"Weather_Keywords", defaultMessage:"weather, forecast, portfolio project"})}
        metaTitle="weather-app"
      />
      <div className="w-full h-[100%] flex justify-center py-5 ">
        {currentLocation === undefined ? (
          <div
            className="m-auto max-w-md flex flex-col gap-5 items-center p-8 rounded-md sm:px-24 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
            <div className="text-center">
              {Err && 
                (<div className="text-xl bg-slate-600 mb-5 rounded-xl text-red-500 font-semibold"> 
                  The typed text cannot be checked as a location!
                </div>
              )}
              <h2 className="text-xl font-semibold border-bottom">Enter a location to get started</h2>
            </div>
            <div className="">
              <input type="text" name="location" placeholder="Location" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} className="
                h-10  border rounded p-2 text-center
                border-gray-400 text-gray-900
                dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800"/>
              <button 
                className="text-white bg-gradient-to-r mt-5 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => getWeather(searchLocation)}>
                  Set Location
              </button>
            </div>  
          </div>
        ) : (
        <div className="m-auto max-w-xl flex flex-col gap-5 items-center p-8 rounded-md sm:px-24 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-lg font-semibold border-bottom">{currentLocation?.display_name}</h2>
            <div className="mb-2 text-md ">
              <div className="flex text-center flex-col">
                <p>Latitude / Longitude</p>
                <div className="font-semibold dark:text-white">
                {currentLocation?.lat} &nbsp;
                {currentLocation?.lon}
                </div>
              </div>
            </div>
            <p className="text-sm dark:text-gray-300">{new Date().toDateString()}</p>      
          </div>
          <div className="flex flex-col items-center">
            <img src={weatherCodeToImage(currentWeather?.weathercode)} className="dark:invert w-40"/>
            <p className="dark:text-gray-300 text-center">{ weatherCodes[currentWeather?.weathercode] }</p>
            <p className="font-semibold text-3xl text-yellow-500 dark:text-white">{currentWeather?.temperature.value }{currentWeather?.temperature.unit }</p>
          </div>
          <div className="mb-2 text-3xl flex flex-row gap-2 justify-between">
            <div className="font-semibold text-blue-800 dark:text-sky-300">{currentWeather?.lowTemp() }{currentWeather?.temperature.unit }</div>
            <div>/</div>
            <div className="font-semibold text-orange-600 dark:text-yellow-500">{currentWeather?.highTemp()}{ currentWeather?.temperature.unit }</div>
          </div>

          <div className="mb-2 text-xl flex flex-row gap-2 justify-between">
            <div className="flex flex-col">
              <p>sunrise</p>
              <div className="font-semibold dark:text-white">{currentWeather?.sunrise.substring(currentWeather?.sunrise.length-5) } </div>
            </div>
            <div><br/>/</div>
            <div className="flex flex-col">
              <p>sunset</p>
              <div className="font-semibold dark:text-white">{currentWeather?.sunset.substring(currentWeather?.sunset.length-5) } </div>
            </div>
          </div>
          
            <input type="text" name="location" placeholder="Location" value={searchLocation} onChange={e => setSearchLocation(e.target.value)} className="
                  h-10  border rounded p-2 text-center
                  border-gray-400 text-gray-900
                  dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800"/>
            <button 
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => getWeather(searchLocation)}>
                Update Location
            </button>
          </div>
        )}
      </div> 
    </>
  )
}

