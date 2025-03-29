import React from 'react';
import { TextInput } from 'react-native';
import InputTextStyles from './InputTextStyles';

const InputText = ({ title, style }) => {
  return (
    <TextInput style={[InputTextStyles.inputText, style]}>{title}</TextInput>
  );
};

export default InputText;
