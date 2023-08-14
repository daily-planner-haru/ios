import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { RootStackParamList } from './src/types/type';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={(props: { navigation: StackNavigationProp<RootStackParamList, 'Login'> }) => <Login navigation={props.navigation} />} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
