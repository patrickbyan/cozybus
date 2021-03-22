import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Login from './../src/Screens/Login/Login'
import Register from './../src/Screens/Register/Register'

const Stack = createStackNavigator()
const RegisterRouter = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default RegisterRouter