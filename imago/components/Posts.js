import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Posts() {
    return (
        <>
            <View style={styles.postHeader}>
                <View style={styles.left}>
                    <Image style={styles.pics}
                        source={{ uri: "https://i1.sndcdn.com/artworks-000599467910-5dnqw8-t500x500.jpg" }} />
                    <Text style={styles.text}>Itachi_Uchiha</Text>
                </View>
                <View style={styles.right}>
                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                </View>
            </View>
            <View style={styles.postImg}>
                <Image style={styles.pimg}
                    source={{ uri: "https://wallpaperaccess.com/full/152508.jpg" }} />
            </View>
            <View style={styles.postFooter}>
                <View style={styles.icos}>
                    <TouchableOpacity>
                        <AntDesign style={styles.ico} name="hearto" size={25} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons style={styles.ico} name="chatbubble-outline" size={25} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons style={styles.ico} name="cursor" size={25} color="white" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.likeShow}>71,256 likes</Text>
                </View>
                <View style={styles.caption}>
                    <Text style={styles.cap}>Only those who are acknowledged by the people
                        can become the hokage !!!</Text>
                </View>
                <View>
                    <Text style={styles.likeShow}>View all 2 comments</Text>
                </View>
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
    postFooter: {
        margin: 5
    },
    likeShow: {
        color: "white",
        marginLeft: 7,
        marginTop: 3,

    },
    cap: {
        color: "white",
        marginLeft: 7,
        marginTop: 3,
        fontSize:16

    },
    likeShow: {
        color: "white",
        marginLeft: 7,
        marginTop: 3,
        opacity:54

    },
    text: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    caption: {
        display: "flex",
    },
    pimg: {
        height: 400,
        width: '100%',
        resizeMode: "cover"

    },
    icos: {
        display: "flex",
        flexDirection: "row"

    },
    ico: {
        marginHorizontal: 5

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
