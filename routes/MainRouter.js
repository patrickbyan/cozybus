import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Home from './../src/Screens/Home/Home'
import BookingHistory from './../src/Screens/BookingHistory/BookingHistory'
import Profile from './../src/Screens/Profile/Profile'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='BookingHistory' component={BookingHistory} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default MainRouter