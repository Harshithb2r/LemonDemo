import { View, Text, StatusBar, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Navhome from '../components/Navhome'
import Categories from '../components/Categories'
import Officerslider from '../components/Officerslider'
import { Ionicons } from '@expo/vector-icons';
import { color } from '../globals/style'

const Home = () => {
  return (
    <View style={styles.container}>
    <StatusBar/>
    <Navhome/>
    <View style={styles.searchbox}>
    <Ionicons name="md-search" size={24} color="black" style={styles.searchicon}/>
    <TextInput placeholder='search' style={styles.input}/>
    </View>
    <Categories/>
    <Officerslider/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.col1,
        alignItems: 'center',
        width: '100%'
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: color.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 12,
        margin: 20,
        elevation:10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: color.text2
    },
    searchicon: {
        color: 'red'
    }
})

export default Home