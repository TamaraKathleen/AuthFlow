import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { authService } from "@services/authService";

export interface AuthData {
    token: string;
    email: string;
    name: string;
}
interface AuthContextData {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            loadFromStorage();
        }, 2000)
    }, [])

    async function loadFromStorage() {
        const auth = await AsyncStorage.getItem('@AuthData');
        if (auth) {
            setAuth(JSON.parse(auth) as AuthData);
        }
        setLoading(false)
    }

    async function signIn(email: string, password: string) {
        try {
            const auth = await authService.signIn(email, password)

            setAuth(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));

        } catch (error) {
            Alert.alert(error.message, "Tente Novamente")
        }
    }

    async function signOut(): Promise<void> {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData');


        return;
    }

    return (
        <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}