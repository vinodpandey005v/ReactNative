import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {useSelector} from 'react-redux';


export type Props = {
  route: any, 
  navigation: any,
};

const PrizeView: React.FC<Props> = ({
    route = {},
    navigation = {},
}:Props) => {

    const steps = useSelector(state => state.step.value);

    const { stepCount, callingback } = route.params;
    console.log('stepCount is', callingback);


   const txtString =  'Wow! You have completed '+ steps + ' steps \n You have won ' + steps*20 + ' points!';
  return (
    <View style={styles.mainContainer}>
        <View style={styles.smallView}>
        <Text style={styles.highlight}> { txtString } </Text>
        </View>
        <View style={styles.buttonStyle}>
        <Button
            title="Redeem!"
            onPress={() =>  {
                callingback();
                 Alert.alert(
                'Reward',
                'Great!, You have redeemed your rewards.',
                [
                  {text: 'OK', onPress: navigation.pop},
                ],
                { cancelable: false }
              )}
            }
           
            color= {'darkred'}
        />
        </View>
        
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
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
    height: 100,
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

export default PrizeView;