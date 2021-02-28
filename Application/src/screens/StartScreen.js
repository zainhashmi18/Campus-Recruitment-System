import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Video from 'react-native-video';
import Logo from "../Images/new.png";

const { width: WIDTH } = Dimensions.get("window")
function StartScreen({ navigation }) {
    return (
        <View style={styles.backgroundContainer}>
            <Video source={require('../Images/video.mp4')}
                rate={1.0}
                volume={0}
                muted={false}
                resizeMode={"cover"}
                repeat
                style={styles.video}
            />
            <View style={styles.topBtnContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Admin Login')} style={styles.btnAdmin}><Text style={styles.text2}>Admin</Text></TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </View >
                <View style={styles.btnMain}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Student Login')} style={styles.btn}><Text style={styles.text}>Student Login</Text></TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Company Login')} style={styles.btn2}><Text style={styles.text2}>Company Login</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 0,
    },
    content: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center",
    },
    btnMain: {
        marginTop: 50,
    },
    btnContainer: {
        marginTop: 10,
    },
    topBtnContainer: {
        margin: 10,
        alignItems: "flex-end"
    },
    logo: {
        width: 300,
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderRadius: 20
    },
    btn: {
        width: WIDTH - 200,
        height: 70,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
    },
    btnAdmin: {
        width: WIDTH - 370,
        height: 50,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: "center",
        marginTop: 5,
    },
    btn2: {
        width: WIDTH - 200,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#D80132",
        justifyContent: "center",
        borderColor: 'white',
        borderWidth: 3,
        marginTop: 5
    },
    text: {
        color: "#D80132",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },
    text2: {
        color: "white",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    }

});
export default StartScreen;