import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';

export default function Posts() {
    return (
        // post header
        <>
            <View style={styles.postHeader}>
                <View style={styles.left}>
                    <Image style={styles.pics}
                        source={{ uri: "https://i1.sndcdn.com/artworks-000599467910-5dnqw8-t500x500.jpg" }} />
                    <Text style={styles.text}>Itachi Uchiha</Text>
                </View>
                <View style={styles.right}>
                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                </View>
            </View>
            <View style={styles.postImg}>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    postHeader: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"


    },
    left: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    right: {
        display: "flex",
        justifyContent: "flex-end"
    },
    text: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    pics: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#e319a6",
        margin: 5
    },
});
