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

// Redux
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import allReducer from './src/Redux/Reducers/Index'

const store = createStore(allReducer, applyMiddleware(thunk))

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <RegisterRouter />
      </NavigationContainer>
    </Provider>
  )
}

export default App
