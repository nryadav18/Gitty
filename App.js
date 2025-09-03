import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GitHub from './screens/github/github';
import Followers from './screens/github/followers/followers';
import Following from './screens/github/following/following';
import Account from './screens/github/account';

const Stack = createNativeStackNavigator();

// const StackArr = [
//   { name: 'Github', component: GitHub },
//   { name: 'Followers', component: Followers },
//   { name: 'Following', component: Following },
//   { name: 'Account', component: Account },
// ]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Github'>
        <Stack.Screen name="Github" component={GitHub}
          options={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitle: ''
          }}
        />
        <Stack.Screen name="Account" component={Account}
          options={{
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
            headerTitle: ''
          }}
        />
        <Stack.Screen name="Followers" component={Followers} options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }} />
        <Stack.Screen name="Following" component={Following} options={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
