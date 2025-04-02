import React from 'react';
import { TextInput } from 'react-native';
import InputTextStyles from './InputTextStyles';

const InputText = ({ title, style, ...props }) => {
  return (
    <TextInput
      style={[InputTextStyles.inputText, style]}
      placeholder={title}
      {...props}
    />
  );
};

export default InputText;
