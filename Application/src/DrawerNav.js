import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Sidebar from './Sidebar';
import StartScreen from './screens/StartScreen';
import { Icon } from 'native-base';
import Profile from './screens/Profile';
import UpdateProfile from './screens/UpdateProfile';

const Drawer = createDrawerNavigator();
function DrawerNav() {

    return (
        <Drawer.Navigator initialRouteName="Main" drawerContent={props => <Sidebar {...props} />}>
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="eyedrop-outline" style={{ fontSize: size, color: color }} />),
            }} name="Profile" component={Profile} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="receipt-outline" style={{ fontSize: size, color: color }} />),
            }} name="Update Profile" component={UpdateProfile} />
            <Drawer.Screen options={{
                title: "Sign Out",
                drawerIcon: ({ focused, color, size }) => (<Icon name="log-out-outline" style={{ fontSize: size, color: color }} />),
            }} name="SignOut" component={StartScreen} />
        </Drawer.Navigator>
    );
}
export default DrawerNav;