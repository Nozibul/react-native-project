import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from './RootNavigation';
// import AuthScreen here
import Login from './AuthScreen/Login';
import HomeScreen from './AuthScreen/HomeScreen';
import Verify from './AuthScreen/Verify';
// Import Dashboard screen here
import Dashboard from './dashboard/Dashboard';
import CheckOut from './dashboard/CheckOut';
// import Context
import {Context as AuthContext} from './context/AuthContext';

//define react navigation stack for Dashboard flow
const Stack = createNativeStackNavigator();
//Define React navigation Stack for Authentication flow
const AuthStack = createNativeStackNavigator();

const DashboardStackFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="check-out" component={CheckOut} />
    </Stack.Navigator>
  );
};

const AuthStackFlow = () => {
  return (
    <AuthStack.Navigator
      // initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="landing-page" component={HomeScreen} />
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="verify" component={Verify} />
    </AuthStack.Navigator>
  );
};

export default () => {
  //bring state token from useContext
  const {
    state: {token},
  } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {token ? <DashboardStackFlow /> : <AuthStackFlow />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
