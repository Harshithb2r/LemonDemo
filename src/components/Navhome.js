import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import logo from '../../assets/MainLogo.png'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from '../globals/style';

const Navhome = () => {
  return (
    <View style={styles.container}>
    <FontAwesome name="navicon" size={28} color="black" style={styles.myicon} />
      <View style={styles.contain}>
        <Text style={styles.mytext}>FoodGo</Text>
        <View style={styles.logoout}>
        <Image source={logo} style={styles.logo}/>
        </View>
      </View>
      <FontAwesome5 name="user-circle" size={28} color="black" style={styles.usericon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: color.col1,
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    logoout: {
        width: 50,
        height: 34
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    mytext: {
        color: 'black',
        fontSize: 24
    },
})

export default Navhome