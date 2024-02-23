import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { auth } from '../firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))
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