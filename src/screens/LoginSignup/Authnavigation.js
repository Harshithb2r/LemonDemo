import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';
import Login from './Login';
import Signup from './Signup';
import Home from '../Home';

const Stack = createNativeStackNavigator();

const Authnavigation = () => {
    return (
        <Stack.Navigator initialRouteName='welcome'>
            <Stack.Screen name="welcome" component={Welcome} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="signin" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="signup" component={Signup} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="home" component={Home} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default Authnavigation
