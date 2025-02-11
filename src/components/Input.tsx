import React from "react";
import { View, Text, TextInput, TextInputProps } from 'react-native';
import global from '../styles/global';

interface InputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({ label, required, password, style, ...props }) => {
  return (
    <View>
      {label && (
        <Text style={global.inputLabel}>
          {label} {required && <Text style={global.inputRequired}>*</Text>}
        </Text>
      )}
      <TextInput style={global.input}
        secureTextEntry={password}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

export default Input;
