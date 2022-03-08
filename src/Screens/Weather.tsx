import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import { WEATHER_API_KEY, API_REQ_KEY , BASE_URL} from '../constants/Constant';
import WeatherDetail from '../components/WeatherDetail'


const Weather: React.FC< {} > = ({
}) => { 

 const [isLoading, setLoading] = useState(true);
  const [weatherDetailData, setData] = useState([]);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');

  const getWeatherData = async (weatherurl: any) => {
      console.log('weatherurl', weatherurl);
     try {
      const response = await fetch(weatherurl);
      const json = await response.json();
      console.log('json Res',json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  useEffect(() => {
    getOneTimeLocation()
  }, []);

  useEffect(() => {
    console.log('status is', locationStatus);
    
  },[locationStatus]);

  useEffect(() => {
      if (currentLongitude  && currentLatitude) {
        console.log('locationupdated', currentLatitude, currentLongitude);
        const url = BASE_URL+API_REQ_KEY.LAT+'='+currentLatitude+'&'+API_REQ_KEY.LONG+'='+currentLongitude+'&'+API_REQ_KEY.APP_ID+'='+WEATHER_API_KEY+'&units=metric' 
        getWeatherData(url);
  }
  }, [currentLatitude, currentLongitude]);


  return (
      isLoading ? <ActivityIndicator size='large'/> : (
         weatherDetailData && <WeatherDetail weatherDetailData={weatherDetailData} />
          )
  );
};

export default Weather;
