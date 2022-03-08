import { StyleSheet} from 'react-native';


export const StepCountStyle = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    containerView: {
      backgroundColor: 'grey',
      width: 200,
      height: 200,
      borderRadius: 200 / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    smallView: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 300,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '400',
      fontSize: 22,
      textAlign: 'center',
      height: 40,
    },
    innerHighlight: {
      fontWeight: '700',
      fontSize: 20,
      textAlign: 'center',
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
  }
  });