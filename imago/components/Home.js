import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './Header'
import Stories from './Stories';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 21,
        flex: 1,
        backgroundColor: 'black',
    },
});
