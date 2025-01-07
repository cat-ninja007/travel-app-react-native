import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
// import HelloScreen from "../screens/HelloScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Check if the user is logged in

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {!isAuthenticated ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      )}

      </Stack.Navigator>
    
    </NavigationContainer>
  );
};


export default MainNavigator;


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import LoginScreen from "../screens/LoginScreen";
// import RegisterScreen from "../screens/RegisterScreen";
// import HelloScreen from "../screens/HelloScreen";

// const Stack = createStackNavigator();

// const MainNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen 
//           name="Login" 
//           component={LoginScreen} 
//           options={{headerShown: false}} 
//         />
//         <Stack.Screen 
//           name="Register" 
//           component={RegisterScreen} 
//           options={{headerShown: false}}
//         />
//         <Stack.Screen 
//           name="Home" 
//           component={HelloScreen} 
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default MainNavigator