import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../pages/SignInScreen';


const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignInScreen} />
        </Stack.Navigator>

    )
}