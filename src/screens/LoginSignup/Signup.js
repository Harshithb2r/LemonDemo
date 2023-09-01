import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import style, { color, titles, btn1, hr80 } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup = ({ navigation }) => {
    const [userfocus, setUserfocus] = useState(false);
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [cpasswordfocus, setCPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
    const [showcpassword, setShowcpassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.head1}>Sign Up</Text>
            <View style={styles.inputfields}>
                <AntDesign name="user" size={24} color={userfocus === true ? color.text1 : color.text2} />
                <TextInput style={styles.input} placeholder='Username'
                    onFocus={() => {
                        setEmailfocus(false)
                        setPasswordfocus(false)
                        setShowpassword(false)
                        setShowcpassword(false)
                        setUserfocus(true)
                    }} />
            </View>
            <View style={styles.inputfields}>
            <MaterialCommunityIcons name="email-check-outline" size={24} color={emailfocus === true ? color.text1 : color.text2} />
                <TextInput style={styles.input} placeholder='Email'
                    onFocus={() => {
                        setEmailfocus(true)
                        setPasswordfocus(false)
                        setShowpassword(false)
                        setShowcpassword(false)
                        setUserfocus(false)
                    }} />
            </View>
            <View style={styles.inputfields}>
                <MaterialIcons name="lock-outline" size={24} color={passwordfocus === true ? color.text1 : color.text2} />
                <TextInput style={styles.input} placeholder='Password'
                    onFocus={() => {
                        setEmailfocus(false)
                        setPasswordfocus(true)
                        setCPasswordfocus(false)
                        setShowcpassword(false)
                        setUserfocus(false)
                    }} secureTextEntry={showpassword === false ? true : false} />
                <Octicons name={showpassword == false ? "eye-closed" : "eye"} size={24} color="black"
                    onPress={() => {
                        setShowpassword(!showpassword)
                    }} />
            </View>
            <View style={styles.inputfieldsb}>
                <MaterialIcons name="lock-outline" size={24} color={cpasswordfocus === true ? color.text1 : color.text2} />
                <TextInput style={styles.input} placeholder='Confirm Password'
                    onFocus={() => {
                        setEmailfocus(false)
                        setPasswordfocus(false)
                        setCPasswordfocus(true)
                        setShowpassword(false)
                        setUserfocus(false)
                    }} secureTextEntry={showcpassword === false ? true : false} />
                <Octicons name={showcpassword == false ? "eye-closed" : "eye"} size={24} color="black"
                    onPress={() => {
                        setShowcpassword(!showcpassword)
                    }} />
            </View>


            <TouchableOpacity style={btn1} onPress={() => navigation.navigate('signin')}>
                <Text style={styles.btntxt}>Join Now</Text>
            </TouchableOpacity>

            <Text style={styles.or}>OR</Text>
            <Text style={styles.gftxt}>Sign UP with</Text>

            <View style={styles.gf}>
                <TouchableOpacity>
                    <View style={styles.gficons}><AntDesign name="google" size={24} color="#EA4335" /></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.gficons}><AntDesign name="facebook-square" size={24} color="#4267B2" /></View>
                </TouchableOpacity>
            </View>
            <View style={hr80}></View>
            <Text>Already have a Account?
                <Text style={styles.Signup} onPress={() => navigation.navigate('signin')}>  Sign In</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center'
        marginTop: '18%'
    },
    head1: {
        fontSize: titles.title1,
        color: color.text1,
        textAlign: 'center',
    },
    inputfields: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: color.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20
    },
    inputfieldsb: {
        flexDirection: 'row',
        width: '80%',
        marginVertical: 10,
        backgroundColor: color.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        elevation: 20,
        marginBottom: 20
    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%'
    },
    btntxt: {
        color: color.col1,
        fontSize: titles.btntxt,
        fontWeight: "bold"
    },
    forgot: {
        color: color.text2,
        marginTop: 20,
        marginBottom: 10
    },
    or: {
        color: color.text1,
        marginVertical: 10,
        fontSize: 25
    },
    gftxt: {
        color: color.text2,
        marginVertical: 10,
        fontSize: 25
    },
    gf: {
        flexDirection: 'row',
    },
    gficons: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        elevation: 20
    },
    Signup: {
        color: color.text1
    }
})

export default Signup
