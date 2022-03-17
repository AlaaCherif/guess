import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Card from '../Card';
import React, { useState } from 'react';
import Input from '../Input';

const StartGameScreen = ({ navigation }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const confirmEnteredValue = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 50) return;
    setConfirmed(true);
    setEnteredValue('');
    setSelectedValue(chosenNumber);
    navigation.navigate('game');
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.imputContainer}>
          <Text>Select A Number!</Text>
          <Input
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='reset'
                color='#cdeac0'
                onPress={() => {
                  setEnteredValue('');
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='confirm'
                color='#ff928b'
                onPress={confirmEnteredValue}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
  },
  imputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
  input: {
    width: 60,
    textAlign: 'center',
  },
});
