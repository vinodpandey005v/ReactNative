import React from 'react';
import { Image, Text, View } from 'react-native';
import {ErrorCardStyle} from '../styles/ErrorCardStyle';



  const ErrorCard: React.FC< {} > = () => { 
    return (
        <View style={ErrorCardStyle.errorContainer}>
          <View>
            <Image source={require('../assets/error.png')} style={ErrorCardStyle.img} />
          </View>
          <View style={ErrorCardStyle.textContainer}>
            <Text style={ErrorCardStyle.errorHead}>Connection Error</Text>
            <Text style={ErrorCardStyle.subText}>
              Please check your network connectivity and try again
            </Text>
          </View>
        </View>
      );
  };
  
  export default ErrorCard;
