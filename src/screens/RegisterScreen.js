import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Button } from '../components/ButtonComponent'
import { Input } from '../components/InputComponent'

const RegisterScreen = (props) => {
  const { navigation } = props
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image}
            source={require('../../assets/images/travel-logo.png')}
          />
          <Text style={styles.logoText}>Travel App</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Register your account here</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input 
            title='Email'
            placeholder='Email'
          />
          <Input 
            title='Username'
            placeholder='Username'
          />
          <Input 
            title='Password'
            placeholder='Password'
          />
        </View>
        <Button text='Register' />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    paddingRight: 24,
  },
  titleContainer: {
    marginBottom: 40,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(46, 62, 92, 1)',
    marginBottom: 8
  },
  subtitle:{
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgba(129, 137, 176, 1)'
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(46, 62, 92, 1)'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 32
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 52
  },
  text: {
    fontSize: 16,
    color: 'rgba(46, 62, 92, 1)'
  },
  registerText: {
    color: 'rgba(22, 60, 159, 1)',
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default RegisterScreen