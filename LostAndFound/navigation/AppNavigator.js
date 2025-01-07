import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeActivity from '../modules/welcome/WelcomeActivity';
import SelectionActivity from '../modules/selection/SelectionActivity';
import SignUpActivity from '../modules/signup/SignUpActivity';
import LoginActivity from '../modules/login/LoginActivity';
import HomeActivity from '../modules/home/HomeActivity';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={WelcomeActivity} />
            <Stack.Screen name="Selection" component={SelectionActivity} />
            <Stack.Screen name="SignUp" component={SignUpActivity} />
            <Stack.Screen name="Login" component={LoginActivity} />
            <Stack.Screen name="Home" component={HomeActivity} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
