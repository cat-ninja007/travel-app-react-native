import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { loginUser } from '../redux/actions/userAction';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); // Track login errors
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Reset previous errors
    setLoginError(null);
  
    // Dispatch the loginUser action
    dispatch(loginUser(username, password))
      .then(() => {
        navigation.navigate('Home'); // Navigate to 'Home' screen after successful login
      })
      .catch((err) => {
        setLoginError(err.message); // Handle error
      });


  };
  

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
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Please enter your account here</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            title="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername} // Bind input to state
          />
          <Input
            title="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword} // Bind input to state
            secureTextEntry // Hide password characters
          />
        </View>

        {/* Conditionally render the login button */}
        <Button
          text="Log In"
          onPress={handleLogin}
          disabled={!username || !password} // Disable if username or password is missing
        />

        {/* Conditionally render the error message */}
        {loginError && <Text style={styles.errorText}>{loginError}</Text>}

        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(46, 62, 92, 1)',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgba(129, 137, 176, 1)',
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(46, 62, 92, 1)',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 32,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 52,
  },
  text: {
    fontSize: 16,
    color: 'rgba(46, 62, 92, 1)',
  },
  registerText: {
    color: 'rgba(22, 60, 159, 1)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;




// import React from 'react'
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Button } from '../components/ButtonComponent'
// import { Input } from '../components/InputComponent'

// const LoginScreen = (props) => {
//   const {navigation} = props
//   return (
//     <ScrollView contentContainerStyle={styles.scroll}>
//       <View style={styles.mainContainer}>
        
//         <View style={styles.imageContainer}>
//           <Image 
//             style={styles.image}
//             source={require('../../assets/images/travel-logo.png')}
//           />
//           <Text style={styles.logoText}>Travel App</Text>
//         </View>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>Welcome Back!</Text>
//           <Text style={styles.subtitle}>Please enter your account here</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           <Input 
//             title='Username'
//             placeholder='Username'
//           />
//           <Input 
//             title='Password'
//             placeholder='Password'
//           />
//         </View>
//         <Button text='Log In' />
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>Don't have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//             <Text style={styles.registerText}>
//               Register
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   scroll: {
//     flexGrow: 1,
//   },
//   mainContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingLeft: 24,
//     paddingRight: 24,
//   },
//   titleContainer: {
//     marginBottom: 40,
//   },
//   title:{
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: 'rgba(46, 62, 92, 1)',
//     marginBottom: 8
//   },
//   subtitle:{
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     color: 'rgba(129, 137, 176, 1)'
//   },
//   imageContainer: {
//     marginTop: 32,
//     marginBottom: 64,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80
//   },
//   logoText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'rgba(46, 62, 92, 1)'
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 32
//   },
//   textContainer: {
//     flexDirection: 'row',
//     marginTop: 52
//   },
//   text: {
//     fontSize: 16,
//     color: 'rgba(46, 62, 92, 1)'
//   },
//   registerText: {
//     color: 'rgba(22, 60, 159, 1)',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
// })

// export default LoginScreen