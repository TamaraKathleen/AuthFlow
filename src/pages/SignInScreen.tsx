import React, { useState } from 'react';
import { View, Text, Image } from "react-native";
import { styles } from "./styles"

import { MyTextInput } from '@components/MyTextInput';
import { MyButton } from '@components/MuButton';
import { useAuth } from '@contexts/Auth';

export function SignInScreen() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={[styles.container, { justifyContent: "center" }]}>
            <Image
                style={{ width: 100, height: 100 }}
                resizeMode='contain'
                source={require('../assets/logo.png')}
            />
            <MyTextInput placeholder='e-mail' value={email} onChangeText={setEmail} />
            <MyTextInput
                secureTextEntry
                placeholder='senha'
                value={password}
                onChangeText={setPassword} />
            <MyButton
                onPress={() => signIn(email, password)}
                title='Entrar no App' />
        </View>
    )
}
