import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function Register() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onPressLogin = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .then((error) => { console.log(error) })
    }

    const onPass = () => {
        show ? setShow(false) : setShow(true)
    }
    return (
        <View style={styles.container}>
            <AntDesign name="pluscircleo" size={94} color="purple" />
            <Text style={styles.login}>Register</Text>
            <View style={styles.inputCont}>
                <TextInput value={username} onChangeText={text => setUsername(text)}
                    style={styles.text} placeholder="Username"></TextInput>
                <TextInput onChangeText={text => setEmail(text)}
                    style={styles.text} placeholder="Email" />
                <TextInput onChangeText={text => setPassword(text)}
                    textContentType='password'
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
        top: 145
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
