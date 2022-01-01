import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'

const data = [
    {
        name: "levi",
        img: "https://www.nawpic.com/media/2020/levi-ackerman-nawpic-17.jpg"
    },
    {
        name: "minato",
        img: "https://static.wikia.nocookie.net/pokemonfanon/images/7/71/Minato_Namikaze.png/revision/latest?cb=20180224181254"
    },
    {
        name: "itachi",
        img: "https://i1.sndcdn.com/artworks-000599467910-5dnqw8-t500x500.jpg"
    },
    {
        name: "jiraiya",
        img: "https://cdn.wallpapersafari.com/61/24/hA7ZJB.jpg"
    },
    {
        name: "mikasa",
        img: "https://stringfixer.com/files/97513492.jpg"
    }
]

export default function Stories() {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    data.map((story) => (
                        <View style={styles.story}>
                            <Image style={styles.pics}
                                source={{ uri: story.img }} />
                            <Text style={styles.text}>{story.name}</Text>
                        </View>
                    ))
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    },
    pics: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#e319a6"

    },
    story: {
        justifyContent: "center",
        alignItems: "center",
        margin: 7
    }
});

