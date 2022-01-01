import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'

export default function Home() {
    return (
        <View style={styles.container}> 
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:21,
        flex: 1,
        backgroundColor: 'black',
    },
});
