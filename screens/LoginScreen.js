import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log("EMAIL :", email);
    console.log("PASS :", password);

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.inputContainer}>
                <TextInput value={email} style={styles.input} onChangeText={(text) => setEmail(text)} placeholder='Email' />
                <TextInput value={password} style={styles.input} onChangeText={setPassword} secureTextEntry placeholder='Şifre' />
            </View>
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        width: "60%",
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    outlineButton: {
        backgroundColor: 'white',
        marginTop: 5,
    },
    outlineButtonText: {
        color: '#0782F9',
        fontSize: 16,
        fontWeight: '700',
    },
})