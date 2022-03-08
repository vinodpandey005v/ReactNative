
import { Dimensions, StyleSheet} from 'react-native';

export const WeatherStyles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#e96e50',
      marginBottom: 10,
    
    },
    
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    },
    loading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    current: {
      alignItems: 'center',
      alignContent: 'center',
      
    },
    currentTemp: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10
    },  
    currentDescription: {
      width: '100%',
      textAlign: 'center',
      fontWeight: '200',
      fontSize: 24,
      marginBottom: 5
    },
    hour: {
      padding: 6,
      alignItems: 'center',
    },
    largeIcon: {
      width: 300,
      height: 250,
    },
    smallIcon: {
      width: 100,
      height: 100,
    },
    extraInfo: {
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'space-between',
      padding: 10
    },
    info: {
      width: Dimensions.get('screen').width/2.5,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      padding: 10,
      borderRadius: 15,
      height: 60,
      justifyContent: 'center',
      marginLeft: 5
    },
  });
  