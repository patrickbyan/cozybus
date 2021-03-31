/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native'

// Stack
import RegisterRouter from './routes/RegisterRouter'
import MainRouter from './routes/MainRouter'

// Redux
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onSaveAsyncStroage} from './src/Redux/Actions/UserAction'

// Splash Screen
import Splash from './src/Screens/Splash/Splash'

// OneSignal
import OneSignal from 'react-native-onesignal'

const App = ({user, onSaveAsyncStroage}) => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(async() => {
    getAsyncStorageData()

    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId("75f0a044-a7bf-4e97-940b-cb24f61c0ee9");
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(false);
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log("Prompt response:", response);
    });
  }, [])

  const getAsyncStorageData = () => {
    AsyncStorage.getItem('@id')
    .then((result) => {
      onSaveAsyncStroage(result)
      setIsLogin(true)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  if(isLogin === false){
    return(
      <Splash />
    )
  }

  return(
    <NavigationContainer>
      {
        user.id?
          <MainRouter />
        :
          <RegisterRouter />
       }
    </NavigationContainer>
  )
}

const mapDispatchToProps = {
  onSaveAsyncStroage
}

const mapStateProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStateProps, mapDispatchToProps)(App)
