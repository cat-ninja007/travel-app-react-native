// import React from 'react'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import LoginScreen from './src/screens/LoginScreen'

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <LoginScreen />
//     </SafeAreaProvider>
//   )
// }

// export default App

// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import MainNavigator from './src/navigator/MainNavigator';

// const App = () => {
//   return (
//     <GestureHandlerRootView>
//       <SafeAreaProvider>
//         <MainNavigator />
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// };


// export default App;

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigator from './src/navigator/MainNavigator';
import { store, persistor } from './src/redux/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          {/* PersistGate delays the rendering of the app's UI until the persisted Redux state is rehydrated */}
          <PersistGate loading={null} persistor={persistor}>
            <MainNavigator />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
