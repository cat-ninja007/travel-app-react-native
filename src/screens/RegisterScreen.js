import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../components/ButtonComponent';
import { Input } from '../components/InputComponent';
import { registerUser } from '../redux/actions/userAction';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState(null); // Track registration errors
  const dispatch = useDispatch();

  const handleRegister = () => {
    // Reset any previous error
    setRegisterError(null);

    if (!email || !username || !password) {
      setRegisterError('All fields are required.');
      return;
    }

    const userData = {
      id: Date.now().toString(), // Generate a unique ID
      name: username,
      email,
      password, // Ideally, hash the password before saving
    };

    // Dispatch the register action
    dispatch(registerUser(userData))
      .then(() => {
        navigation.navigate('Login'); // Navigate to HomeScreen after successful registration
      })
      .catch((err) => {
        setRegisterError(err.message); // Set the error message on failure
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
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Register your account here</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            title="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail} // Bind input to state
          />
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

        {/* Conditionally render the Register button */}
        <Button
          text="Register"
          onPress={handleRegister}
          disabled={!email || !username || !password} // Disable if any field is empty
        />

        {/* Conditionally render the error message */}
        {registerError && <Text style={styles.errorText}>{registerError}</Text>}

        <View style={styles.textContainer}>
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registerText}>Login</Text>
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

export default RegisterScreen;



// import React from 'react'
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
// import { Button } from '../components/ButtonComponent'
// import { Input } from '../components/InputComponent'

// const RegisterScreen = (props) => {
//   const { navigation } = props
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
//           <Text style={styles.title}>Create Account</Text>
//           <Text style={styles.subtitle}>Register your account here</Text>
//         </View>
//         <View style={styles.inputContainer}>
//           <Input 
//             title='Email'
//             placeholder='Email'
//           />
//           <Input 
//             title='Username'
//             placeholder='Username'
//           />
//           <Input 
//             title='Password'
//             placeholder='Password'
//           />
//         </View>
//         <Button text='Register' />
//         <View style={styles.textContainer}>
//           <Text style={styles.text}>Already have an account? </Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.registerText}>
//               Login
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

// export default RegisterScreen