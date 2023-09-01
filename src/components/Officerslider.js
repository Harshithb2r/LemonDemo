import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import style, { color } from '../globals/style'
import img1 from '../../assets/img.png'


const Officerslider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Officerslider}>
                <Swiper activeDotColor={color.text1}>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/img1.png')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/img2.png')} style={styles.image} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../../assets/img3.png')} style={styles.image} />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}

export default Officerslider

const styles = StyleSheet.create({
    Officerslider: {
        width: '100%',
        height: 200,
        backgroundColor: color.col1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    slide: {
        width: '100%',
        height: 200,
        backgroundColor: color.text3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})