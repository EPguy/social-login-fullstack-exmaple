import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface TextInputProps {
  textLabel: string;
  onChangeText: (text: string) => void;
  value: string;
  placeholder: string;
  style?: {};
}

export function CustomTextInput(props: TextInputProps) {
  return (
    <View>
      <Text style={styles.inputLabel}>{props.textLabel}</Text>
      <TextInput
        style={{ ...styles.input, ...props.style }}
        placeholderTextColor="#D3D3D3"
        onChangeText={(text) => props.onChangeText(text)}
        value={props.value}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    marginBottom: 5,
    fontSize: 13,
  },
  input: {
    paddingLeft: 3,
    paddingBottom: 5,
    fontSize: 14,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
});
