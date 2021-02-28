import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import StartScreen from './screens/StartScreen';
import StudentLogin from './screens/StudentLogin';
import AdminLogin from './screens/AdminLogin';
import CompanyLogin from './screens/CompanyLogin';
import Registration from './screens/Registration';
import AdminReg from './screens/AdminReg';
import CMPReg from './screens/CmpReg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNav from './DrawerNav';
import DrawerNav2 from './DrawerNav2';
import DrawerNav3 from './DrawerNav3';
import { useState, useEffect } from 'react';
import UpdateProfile from './screens/UpdateProfile';

const Stack = createStackNavigator();

function StackNav() {
  const [isloggedin, setLogged] = useState(null)

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }
  useEffect(() => {
    detectLogin()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Start" component={StartScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Student Login" component={StudentLogin} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Admin Login" component={AdminLogin} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Company Login" component={CompanyLogin} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Main" component={DrawerNav} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Main2" component={DrawerNav2} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Main3" component={DrawerNav3} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Registration" component={Registration} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Admin Registration" component={AdminReg} options={{
          headerShown: false
        }} />
        <Stack.Screen name="CMP Registration" component={CMPReg} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;