import { StyleSheet} from 'react-native';


export const ErrorCardStyle = StyleSheet.create({
    errorContainer: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      paddingBottom: 30,
      justifyContent: 'center',
    },
    img: {height: 120, width: 120},
    textContainer: {
      alignItems: 'center',
    },
    title: {marginBottom: 10, fontSize: 20, fontWeight: 'bold'},
    errorHead: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    subText: {
      fontSize: 16,
      fontWeight: '500',
      paddingHorizontal: 50,
      textAlign: 'center',
    },
  });