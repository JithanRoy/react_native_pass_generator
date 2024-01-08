/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Form validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4, 'should be min of 4 character')
  .max(16, 'should be max of 4 character')
  .required('Length is required')
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    uppercase_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lowercase_characters = "abcdefghijklmnopqrstuvwxyz"
    digits = "0123456789"
    special_characters = "!@#$%^&*()_-+=<>?/[]{},."

    if(upperCase) {
      characterList += upperCase;
    }
    if(lowerCase) {
      characterList += lowerCase;
    }
    if(numbers) {
      characterList += numbers;
    }
    if(symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
      let result = '';
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characters.length)
        result += characters.charAt(characterIndex);
      }
      return result;
  }


  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setupperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View >
      <Text>App</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//   },
// });
