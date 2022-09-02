import React from 'react';
import { View, Text } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { MyButton } from '@components/MuButton';
import { styles } from './styles';

export function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Essa tela só pode ser vista por usuários autenticados!
            </Text>
            <MyButton
                onPress={() => navigation.navigate("Settings")}
                title='Ir para Configurações' />
            <Text>
                by <Text style={styles.coffText}>Coffstack</Text>
            </Text>
        </View>
    )
}
