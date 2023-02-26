import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={[ButtonStyles.button, buttonStyle]} onPress={onPress}>
      <Text style={[ButtonStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#fde500',  
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
});

export default CustomButton;
