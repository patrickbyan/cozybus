import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icon
import Icon from 'react-native-vector-icons/FontAwesome' 

// Screens
import Home from './../src/Screens/Home/Home'
import BookingHistory from './../src/Screens/BookingHistory/BookingHistory'
import Profile from './../src/Screens/Profile/Profile'

// Styles
import Color from './../src/Supports/Styles/Color'

const Tab = createBottomTabNavigator()
const MainRouter = () => {
    return(
        <Tab.Navigator 
            tabBarOptions={{size: 6, activeTintColor: '#e84545', inactiveTintColor: '#2b2e4a' }}
        >
            <Tab.Screen 
                name='Home' component={Home}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return(
                            <Icon name='home' color={color} size={size} />
                        )
                    }
                }} 
            />
            <Tab.Screen 
                name='BookingHistory' component={BookingHistory} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='credit-card' color={color} size={size} />
                    )
                }}}
            />
            <Tab.Screen 
                name='Profile' component={Profile} 
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='user' color={color} size={size} />
                    )
                }}}
            />
        </Tab.Navigator>
    )
}

export default MainRouter