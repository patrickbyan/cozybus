/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

// Stack
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'

const App = () => {
  return(
    <NavigationContainer>
      <RegisterRouter />
    </NavigationContainer>
  )
}

export default App
