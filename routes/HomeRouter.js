import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from './../src/Screens/Home/Home'
import ShuttleLists from './../src/Screens/ShuttleLists/ShuttleLists'
import ShuttleDetail from './../src/Screens/ShuttleDetail/ShuttleDetail'
import BookingDetail from '../src/Screens/BookingDetail/BookingDetail'
import Payment from '../src/Screens/Payment/Payment'

const Stack = createStackNavigator()

const HomeStackNavigation = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ShuttleLists' component={ShuttleLists} />
            <Stack.Screen name='ShuttleDetail' component={ShuttleDetail} />
            <Stack.Screen name='BookingDetail' component={BookingDetail} />
            <Stack.Screen name='Payment' component={Payment} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigation