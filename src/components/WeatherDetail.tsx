import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { WeatherStyles } from '../styles/WeatherStyles'


export type WeatherProps = {
  weatherDetailData: any, 
};


const WeatherDetail: React.FC< WeatherProps > = ({
  weatherDetailData = {},
}:WeatherProps) => { 

  const {weather, main, name}  = weatherDetailData;
  const {description} =  weather[0]
  const {temp, feels_like, humidity} = main;
  return (
            <SafeAreaView style={WeatherStyles.container}>

                <Text style={{alignItems:'center', textAlign:'center', marginTop: 0, fontSize: 18, color: 'darkblue', fontWeight: 'bold'}}>{name}</Text>
                <View style={WeatherStyles.current}>
                  <Text style={WeatherStyles.currentTemp}>{Math.round(temp)}°C</Text>
                </View>
                <Text style={WeatherStyles.currentDescription}>{description}</Text>
                <View style={WeatherStyles.extraInfo}>
                  <View style={WeatherStyles.info}>
                    <Image 
                      source={require('../assets/temp.png')}
                      style={{width:20, height:20, borderRadius:20/2, marginLeft:50}}
                    />  
                    <Text style={{ fontSize: 12, color: 'white', textAlign:'center' }}>{feels_like}°C</Text>
                    <Text style={{ fontSize: 12, color: 'white', textAlign:'center' }}>Feels Like</Text>
                  </View>
                  <View style={WeatherStyles.info}>
                    <Image 
                      source={require('../assets/humidity.png')}
                      style={{width:20, height:20, borderRadius:20/2, marginLeft:50}}
                    />
                    <Text style={{ fontSize: 12, color: 'white', textAlign:'center' }}>{humidity}% </Text>
                    <Text style={{ fontSize: 12, color: 'white', textAlign:'center' }}>Humidity</Text>
                  </View>
                </View>
            </SafeAreaView>
  );
};

export default WeatherDetail;

