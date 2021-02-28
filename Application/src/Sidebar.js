import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from "@react-navigation/drawer";
import React from "react";
import { Container, Content, Footer, Icon, Header, Right, Button, ListItem, Left, Thumbnail, Text, View } from "native-base";
import Animate from "react-native-reanimated";
import 'react-native-gesture-handler';
import { DrawerActions } from "@react-navigation/native";

function SideBar({ progress, ...props }) {
    const translateX = Animate.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <Container>
            <Header style={{ backgroundColor: "white", borderBottomWidth: 0 }} >
                <Right>
                    <Button transparent onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon style={{ color: "black", fontSize: 30 }} name="menu" />
                    </Button>
                </Right>
            </Header>
            <Content contentContainerStyle={{ flex: 1 }}>
                <ListItem style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Thumbnail style={{ width: 100, height: 100, resizeMode: "cover", borderRadius: 500 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOcsBODoLA4VywHU_DNzBdOjDbXgXQKDM0pg&usqp=CAU" }} />
                    <ListItem >
                        <Text>Zain Hashmi</Text>
                    </ListItem>
                </ListItem>
                <DrawerContentScrollView {...props}>
                    <Animate.View style={{ transform: [{ translateX }] }}>
                        <DrawerItemList {...props} />
                    </Animate.View>
                </DrawerContentScrollView>
            </Content>
            <Footer style={{ backgroundColor: "transparent", height: 100 }} >

            </Footer>
        </Container >
    )
}
export default SideBar;