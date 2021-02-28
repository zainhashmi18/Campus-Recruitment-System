import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Sidebar from './Sidebar';
import StartScreen from './screens/StartScreen';
import { Icon } from 'native-base';
import AllUsers from './screens/AllUsers';
import AllCompanies from './screens/AllCompanies';

const Drawer = createDrawerNavigator();
function DrawerNav3() {

    return (
        <Drawer.Navigator initialRouteName="Main3" drawerContent={props => <Sidebar {...props} />}>
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="bookmarks-outline" style={{ fontSize: size, color: color }} />),
            }} name="All Companies" component={AllCompanies} />
            <Drawer.Screen options={{
                drawerIcon: ({ focused, color, size }) => (<Icon name="receipt-outline" style={{ fontSize: size, color: color }} />),
            }} name="All Students" component={AllUsers} />
            <Drawer.Screen options={{
                title: "Sign Out",
                drawerIcon: ({ focused, color, size }) => (<Icon name="log-out-outline" style={{ fontSize: size, color: color }} />),
            }} name="SignOut" component={StartScreen} />
        </Drawer.Navigator>
    );
}
export default DrawerNav3;