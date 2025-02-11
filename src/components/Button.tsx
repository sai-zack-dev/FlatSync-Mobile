import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import global from '../styles/global';

interface ButtonProps {
  color?: string;
  bg?: string;
  title: string;
  bold?: boolean;
}

const Button: React.FC<ButtonProps> = ({ color, bg = "#fff", title, bold }) => {
  return (
    <TouchableOpacity style={[global.button, {backgroundColor: bg }]}>
        <Text style={[global.buttonTitle, {color: color, fontWeight: bold ? "bold" : "normal"}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button