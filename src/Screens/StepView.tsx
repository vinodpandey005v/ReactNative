import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import RNShake from 'react-native-shake';
import { useNavigation } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, reset} from '../store/stepSlice';

import {StepCountStyle} from '../styles/StepCountStyle';
export type Props = {
  name?: string;
};

const StepView: React.FC<Props> = ({
}:Props) => {

  // Redux
  const steps = useSelector(state => state.step.value);
  const dispatch = useDispatch();

// Hooks API
  let [stepCount, setstepCount] = React.useState(0);
  const [ isHiddenPrizeButton, setisHiddenPrizeButton ] = React.useState<boolean>(true);

  // Navigation
  const navigation = useNavigation();


  useEffect(() => {
    const subscription = RNShake.addListener((): void => {
      // Your code here...
      setstepCount(state => (state +1)); 
      dispatch(increment());
    });

      //component will unmount
      return () => {
        subscription.remove()
      }
  }, []);

  useEffect(() => {
    if (steps >4 && steps % 5 === 0) {   
      setisHiddenPrizeButton( !isHiddenPrizeButton );
      Alert.alert('Wow! You have completed '+ steps + ' steps \n You have won ' + steps*20 + ' points!');
    }
  }, [steps, dispatch]);

 
   function callback() { 
    setstepCount( 0 ); 
    dispatch(reset());
};
 
   
  return (
   <View style={StepCountStyle.mainContainer}>
     <View style={StepCountStyle.smallView}>
      <Text style={StepCountStyle.highlight}>Goal: 500 Steps</Text>
      <Text style={StepCountStyle.highlight}>Your today's Step Count</Text>
      </View>
      <View style={StepCountStyle.containerView}>
        <Text style={StepCountStyle.innerHighlight}>{steps} </Text>
        <Text style={StepCountStyle.sectionDescription}>Steps</Text>
      </View>
        {steps >= 5 ?   
        <View style={StepCountStyle.buttonStyle}>
        <Button
          title="Go to Prizes!"
          onPress={() => navigation.navigate('Prize' as never, {stepCount: stepCount, callingback: callback} as never)}
          color= {'darkred'}
        />
        </View>
        : null
        }
    </View>
  );
};


export default StepView;

