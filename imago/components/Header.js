import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.iconsCont}>
            <TouchableOpacity>
                <Entypo name="home" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <Feather name="search" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="plussquareo" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="hearto" size={25} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome5 name="facebook-messenger" size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
});

