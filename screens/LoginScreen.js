import React, { useEffect, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { AUTH } from "../firebase"

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const auth = AUTH;
    const navigation = useNavigation();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                navigation.replace("Home");
            }
        })
    }, []) 

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed In Using", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed Up Using", user.email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior='padding'
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.inputField}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSignIn}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSignUp}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    inputField: {
        color: 'gray',
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
    },
    buttonContainer: {
        marginTop: 10,
        width: '60%',    
    },
    submitButton: {
        backgroundColor: '#002147',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 1,

    },
    buttonText: {
        color: 'whitesmoke',
        fontWeight: '700',
    }

});

export default LoginScreen;