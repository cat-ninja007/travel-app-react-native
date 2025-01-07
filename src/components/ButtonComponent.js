import React from "react";
import { View, Text, Touchable, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Button = (props) => {
  const { text } = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    margin: 16,
    backgroundColor: 'rgba(22, 60, 159, 1)'
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  text: {
    fontWeight: 'bold',
    color: 'rgba(242, 242, 242, 1)',
    fontSize: 16
  }
})