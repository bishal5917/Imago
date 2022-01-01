import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function First({ navigation }) {
    return (
        <View>
            <Button style={styles.btns}
                title="Login"
                onPress={() => navigation.navigate('login')}
            />
            <Button style={styles.btns}
                title="Register"
                onPress={() => navigation.navigate('register')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    btns: {
        margin: 20
    },
});
