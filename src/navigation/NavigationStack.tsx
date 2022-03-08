import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/HomeView';
import PrizeView from '../Screens/PrizeView';
import Weather from '../Screens/Weather';
import StepView from '../Screens/StepView';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {

    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Health' }}
        />
        <Stack.Screen
          name="Steps"
          component={StepView}
          options={{ title: 'Step Counter' }}
        />
        <Stack.Screen 
        name="Prize" 
        component={PrizeView}
        options={{ title: 'Rewards' }} 
        />
        <Stack.Screen 
        name="Weather" 
        component={Weather}
        options={{ title: 'Weather' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
