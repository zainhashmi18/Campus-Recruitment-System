import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import 'react-native-gesture-handler';
import { Item, Label, Input, Form } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

const { width: WIDTH } = Dimensions.get("window")
function CMPReg(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    submitCred = async () => {
        fetch("http://10.0.2.2:3000/companysignup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "name": name,
                "password": password,
            })
        })
            .then(res => res.json())
            .then(async (data) => {
                console.log(data)
                try {
                    await AsyncStorage.setItem('token', data.token)
                    props.navigation.replace("Company Login")
                } catch (e) {
                    console.log("Error here", e);
                }
            })
    }
    return (
        <View style={styles.backgroundContainer}>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.logoContainer}>
                    <Icon name="medkit-outline" size={100} style={styles.logo} />
                    <Text style={styles.logoText}>Create Account</Text>
                </View>

                <View style={styles.textContainer}>
                    <Form style={{ marginHorizontal: 0 }}>
                        <Item style={{ marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "white" }}>Company Email*</Label>
                            <Input style={{ color: "white" }} onChangeText={(e) => setEmail(e)} />
                        </Item>
                        <Item style={{ marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "white" }}>Company Name*</Label>
                            <Input style={{ color: "white" }} onChangeText={(e) => setName(e)} />
                        </Item>
                        <Item style={{ marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "white" }}>Password</Label>
                            <Input style={{ color: "white" }} secureTextEntry onChangeText={(e) => setPassword(e)} />
                        </Item>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} onPress={() => submitCred()}><Text style={styles.text}>Get Started</Text></TouchableOpacity>
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
        backgroundColor: "#D80132",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    textContainer: {
        marginBottom: 10
    },
    btnContainer: {
        marginTop: 10
    },
    logo: {
        width: 100,
        height: 100,
        color: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    logoText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 1,
        textDecorationLine: 'underline'
    },
    btn: {
        width: WIDTH - 100,
        height: 70,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 25,
    },
    text: {
        color: "#D80132",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },

});
export default CMPReg;