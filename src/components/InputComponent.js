import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export const Input = (props) => {
  const { title, ...rest } = props; // Destructure the props to pass down only the necessary ones
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...rest} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 16,
  },
  inputContainer: {
    borderRadius: 12,
    backgroundColor: 'rgba(241, 246, 251, 1)',
    width: '100%'
  },
  input : {
    fontSize: 12,
    flex: 1,
    color: 'black',
    paddingLeft: 16
  }
})

// import React from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// export const Input = (props) => {
//   const { title } = props;
//   return (
//     <View style={styles.mainContainer}>
//       {/* <View style={styles.titleContainer}>
//         <Text>{title}</Text>
//       </View> */}
//       <View style={styles.inputContainer}>
//         <TextInput style={styles.input} {...props} />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     marginBottom: 16,
//   },
//   inputContainer: {
//     borderRadius: 12,
//     backgroundColor: 'rgba(241, 246, 251, 1)',
//     width: '100%'
//   },
//   input : {
//     fontSize: 12,
//     flex: 1,
//     color: 'black',
//     paddingLeft: 16
//   }
// })