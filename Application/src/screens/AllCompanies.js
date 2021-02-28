import React from "react";
import { Container, Header, Left, Icon, Right, Button, } from "native-base";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { ScrollView } from "react-native-gesture-handler";

const { width: WIDTH } = Dimensions.get("window")

export default function AllCompanies({ navigation }) {

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
                <View style={styles.backgroundContainer}>
                    <Text style={styles.text}>All Companies Details</Text>
                    <Text style={{ marginTop: 50, margin: 20 }}>Profile Details</Text>
                    <Text style={{ margin: 20 }}>Name</Text>
                    <Text style={{ margin: 20 }}>Age</Text>
                    <Text style={{ margin: 20 }}>Address</Text>
                    <Text style={{ margin: 20 }}>Qualification</Text>
                    <Text style={{ margin: 20 }}>Institute</Text>
                    <Text style={{ margin: 20 }}>Phone Number</Text>
                    <Text style={{ margin: 20 }}>Expertise</Text>

                </View>
            </Container >
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: WIDTH - 100,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#b7eaff",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 50,
        marginVertical: 50,
    },
    text: {
        color: "white",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },

});