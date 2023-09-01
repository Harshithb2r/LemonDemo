import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../../../assets/MainLogo.png'
import { color, hr80 } from '../../globals/style'


const Welcome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome screen</Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={hr80} />
            <Text style={styles.text}>
                Find The Best Food Around You At All Time
            </Text>
            <View style={hr80} />

            <View style={styles.btns}>
                <TouchableOpacity onPress={()=> navigation.navigate('signup')}>
                    <Text style={styles.btn}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('signin')}>
                    <Text style={styles.btn}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4242',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: color.col1,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '200'
    },
    logoout: {
        width: "80%",
        height: "30%",
        alignItems: 'center',
    },
    logo: {
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: 18,
        width: '80%',
        color: color.col1,
        textAlign: 'center'
    },
    btns: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: color.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20
    }
})

export default Welcome      