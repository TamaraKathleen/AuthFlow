import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import { NavigationContainer } from "@react-navigation/native"
import { AppStack } from '@routes/AppStack';
import { AuthStack } from '@routes/AuthStack';
import { useAuth } from '@contexts/Auth';

export function Router() {

    const { authData, loading } = useAuth();

    if (loading) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Lottie source={require('../assets/loading.json')} loop autoPlay />
            </SafeAreaView>
        )
    }

    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}