import React, { useEffect, useState } from 'react';

import NetInfo from '@react-native-community/netinfo';



let currentNetwork:any;
NetInfo.fetch().then((state) => {
currentNetwork = state.isConnected;

});

const CheckNetworkConnection = () => {

const [netInfo, setNetInfo] = useState(currentNetwork);

useEffect(() => {

const unsubscribe = NetInfo.addEventListener((state) => {

console.log("Current Connection type", state.type);
console.log("Is n/w connected?", state.isConnected);

setNetInfo(state.isConnected);

});

return () => unsubscribe();

}, []);

return netInfo;
};

export default CheckNetworkConnection;