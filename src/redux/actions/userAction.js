import realm from '../../database/realm'; // Correctly import realm

export const registerUser = (userData) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          realm.create('User', userData);
        });

        // Simulate an async operation (like calling an API or saving to the database)
        setTimeout(() => {
          const plainUserData = {
            email: userData.email,
            username: userData.username,
            password: userData.password,
          };
          
          dispatch({ type: 'LOGIN', payload: plainUserData });
          resolve(); // Resolve the promise after successful registration
        }, 1000); // Simulate some delay if necessary
      } catch (error) {
        reject(error); // Reject the promise if there's an error
      }
    });
  };
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        const user = realm.objects('User').filtered(`email = "${username}" AND password = "${password}"`)[0];
        
        if (user) {
          // Create a plain JavaScript object before dispatching
          const plainUser = {
            email: user.email,
            username: user.username,
            password: user.password,
          };

          dispatch({ type: 'LOGIN_SUCCESS', payload: plainUser }); // Change 'LOGIN' to 'LOGIN_SUCCESS'
          resolve(); // Resolve the promise after successful login
        } else {
          reject(new Error('Invalid credentials')); // Reject the promise if login fails
        }
      } catch (error) {
        reject(error); // Reject the promise if there's an error
      }
    });
  };
};

// userAction.js
export const logoutUser = () => {
  return (dispatch) => {
    // Dispatch the logout action
    dispatch({ type: 'LOGOUT' });
  };
};




