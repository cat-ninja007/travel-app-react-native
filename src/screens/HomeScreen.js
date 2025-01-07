// HomeScreen.js (or HelloScreen.js)
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/userAction';  // Make sure to import the logout action

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());  // Dispatch the logout action
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, you are logged in!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default HomeScreen;
