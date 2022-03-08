import { BackHandler, StyleSheet} from 'react-native';
import { Screen } from 'react-native-screens';


export const HomeStyle = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    backgroundImage: {
      flex: 1,
    },
    smallView: {
      flex: 1,
      marginTop: 30,
    },
    highlight: {
      fontWeight: '400',
      fontSize: 22,
      textAlign: 'center',
      height: 40,
    },
    buttonStyle: {
      marginTop: 30,
      marginLeft: 50,
      marginRight: 50,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: "green",
      overflow: "hidden",
      marginBottom: 10,
  },
  weatherContainerStyle: {
    flex: 2,
  },
  StepsContainerStyle: {
    flex: 3,
    marginTop: 20,
  }
  
  });