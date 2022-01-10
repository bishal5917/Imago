import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from './Header'
import Posts from './Posts';
import Stories from './Stories';

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
            <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: 0.3,
                    fontWeight:2
                  
                }}
            />

            <ScrollView>
                <Posts />
            </ScrollView>
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
