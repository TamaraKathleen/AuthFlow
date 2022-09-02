import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@pages/HomeScreen';
import { SettingsScreen } from '@pages/SettingsScreen';


const Stack = createNativeStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerTitleAlign: "center" }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}