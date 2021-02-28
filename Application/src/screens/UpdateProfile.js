import React from "react";
import { Container, Header, Left, Icon, Right, Button, } from "native-base";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import { Item, Label, Input, Form } from 'native-base';
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window")

export default function UpdateProfile({ navigation }) {

    return (
        <ScrollView>
            <Container style={{
            }}>
                <Header style={{ backgroundColor: "white" }}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Icon style={{ color: "black", fontSize: 30 }} name="menu" />
                        </Button>
                    </Left>

                    <Right />
                </Header>
                <View style={styles.textContainer}>
                    <Text style={{ fontSize: 20 }}>Update Profile</Text>
                    <Form style={{ marginHorizontal: 0 }}>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Email*</Label>
                            <Input style={{ color: "black" }} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Name*</Label>
                            <Input style={{ color: "black" }} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Age</Label>
                            <Input style={{ color: "black" }} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Department</Label>
                            <Input style={{ color: "black" }} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Semester</Label>
                            <Input style={{ color: "black" }} />
                        </Item>
                        <Item style={{ borderColor: "#D80132", marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "black" }}>Password</Label>
                            <Input style={{ color: "black" }} secureTextEntry />
                        </Item>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.btn} ><Text style={styles.text}>Update</Text></TouchableOpacity>
                        </View>
                    </Form>

                </View>
            </Container >
        </ScrollView>
    );
}
const styles = StyleSheet.create({

    textContainer: {
        marginBottom: 10,
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center",
    },
    btnContainer: {
        marginTop: 10
    },
    btn: {
        width: WIDTH - 120,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#D80132",
        justifyContent: "center",
        marginTop: 25,
    },
    text: {
        color: "white",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },

});