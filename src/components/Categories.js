import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style, { color } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';

const Categories = () => {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.head}>Categories</Text>

            <ScrollView horizontal>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                    <Text>Burger</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                    <Text>Burger</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                    <Text>Burger</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                    <Text>Burger</Text>
                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" />
                    <Text>Burger</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: color.col1,
        width: '90%',
        elevation: 10,
        borderRadius: 10
    },
    head: {
        color: color.text1,
        fontSize: 25,
        fontWeight: '400',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: color.text1,
        borderBottomWidth: 1
    },
    box: {
        backgroundColor: color.col1,
        elevation: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})