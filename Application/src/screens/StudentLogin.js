import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Item, Label, Input, Form } from 'native-base';
import 'react-native-gesture-handler';
import Logo from "../Images/std.jpg";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width: WIDTH } = Dimensions.get("window")
function StudentLogin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const submitCred = async () => {
        fetch("http://10.0.2.2:3000/studentsignin", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                try {
                    await AsyncStorage.setItem('token', data.token)
                    props.navigation.replace("Main")
                } catch (e) {
                    console.log("error hai", e)
                }
            })
    }
    return (
        <View style={styles.backgroundContainer}>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                    <Text style={styles.logoText}>Student Sign In</Text>
                </View>

                <View style={styles.textContainer}>
                    <Form style={{ marginHorizontal: 0 }}>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "#D80132" }}>Email</Label>
                            <Input style={{ color: "black" }} onChangeText={(e) => setEmail(e)} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "#D80132" }}>Password</Label>
                            <Input style={{ color: "black" }} secureTextEntry onChangeText={(e) => setPassword(e)} />
                        </Item>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() => submitCred(props)} style={styles.btn}><Text style={styles.text}>Sign in</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Registration')} style={styles.btn}><Text style={styles.text}>Register</Text></TouchableOpacity>
                        </View>

                    </Form>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    textContainer: {
        marginBottom: 10
    },
    btnContainer: {
        marginTop: 10,
        flexDirection: "row"
    },
    logo: {
        width: 180,
        height: 130,
    },
    logoText: {
        color: "#D80132",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 1,
    },
    btn: {
        width: WIDTH - 300,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#D80132",
        justifyContent: "center",
        marginTop: 25,
        marginHorizontal: 5
    },
    text: {
        color: "white",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },

});
export default StudentLogin;