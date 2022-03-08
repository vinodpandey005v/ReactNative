import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {HomeStyle} from '../styles/HomeStyle'
import Weather from './Weather'
import { WeatherStyles } from '../styles/WeatherStyles';


const HomeView: React.FC<{}> = ({
}) => {

  const navigation = useNavigation();

 
   
  return (

    <View style={HomeStyle.mainContainer} accessible={true} >
        <View style={HomeStyle.smallView}>
          <Text style={HomeStyle.highlight}>Welcome Vinod!!</Text>
          </View>

          <View style={HomeStyle.weatherContainerStyle}>
          <Text style={WeatherStyles.title}>Weather</Text>
            <Weather />
            </View>

            <View style={HomeStyle.StepsContainerStyle} accessibilityLabel="Tap to see Steps!" accessibilityHint="Navigates to the steps screen"
>
                <View style={HomeStyle.buttonStyle} accessible={false}>
                  <Button
                    title="My Steps"
                    onPress={() => navigation.navigate('Steps' as never)}
                    color= {'darkred'}
                  />
              </View>
            </View>

          
    
      </View>

  );
};


export default HomeView;

