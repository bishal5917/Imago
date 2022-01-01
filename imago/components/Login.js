import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const onPressLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            })
        setEmail("")
        setPassword("")
    }

    const onPass = () => {
        show ? setShow(false) : setShow(true)
    }

    return (
        <View style={styles.container}>
            <Ionicons name="person-circle-sharp" size={94} color="white" />
            <Text style={styles.login}>Login</Text>
            <View style={styles.inputCont}>
                <TextInput value={email} style={styles.text} onChangeText={text => setEmail(text)}
                    placeholder="Email"></TextInput>
                <TextInput value={password} textContentType='password' onChangeText={text => setPassword(text)}
                    style={styles.text} placeholder="Password"></TextInput>
                <FontAwesome onPress={onPass} style={styles.eyeIcons}
                    name={show ? "eye" : "eye-slash"}
                    size={17} color="black" />
            </View>
            <Text style={styles.forget}>Forget Password ?</Text>
            <View style={styles.loginBtn}>
                <Button
                    onPress={onPressLogin}
                    fontSize="30"
                    color="teal"
                    title="Submit"
                />
            </View>

            {error &&
                <Text style={styles.forget}>Incorrect Credentials !!!</Text>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002633',
        alignItems: "center",
        justifyContent: 'center',
    },
    forget: {
        color: "tomato",
        margin: 5

    },
    login: {
        fontSize: 50,
        color: "teal"
    },
    text: {
        backgroundColor: "#2596be",
        padding: 10,
        fontSize: 20,
        color: "white",
        borderRadius: 10,
        width: 300,
        margin: 7
    },
    eyeIcons: {
        position: "absolute",
        left: 280,
        top: 85
    },
    inputCont: {
        position: "relative",
        marginTop: 50
    },
    loginBtn: {
        width: 315,
        padding: 10,
        borderRadius: 10,
    }
});
