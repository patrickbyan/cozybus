import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from './../src/Screens/Home/Home'
import ShuttleLists from './../src/Screens/ShuttleLists/ShuttleLists'

const Stack = createStackNavigator()

const HomeStackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ShuttleLists' component={ShuttleLists} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation