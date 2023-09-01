import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Authnavigation from './screens/LoginSignup/Authnavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <Authnavigation/>
    </NavigationContainer>
  )
}

export default RootNavigation
