import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gameplay from './components/Pages/Gameplay';
import StartGameScreen from './components/Pages/StartGameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const header = {
    headerStyle: {
      backgroundColor: '#ff928b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={StartGameScreen}
          options={{ ...header, title: 'Guess A Number' }}
        />
        <Stack.Screen
          name='game'
          component={Gameplay}
          options={{
            title: 'GAME TIME !',
            ...header,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
