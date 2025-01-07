import Realm from '../database/realm';

export const registerUser = async (email, username, password) => {
  const realm = await Realm();
  realm.write(() => {
    realm.create('User', {
      id: new Date().getTime().toString(), // Generate a unique ID
      email,
      username,
      password, // Use hashPassword from utils before saving
    });
  });
  return { success: true, message: 'User registered successfully!' };
};

export const loginUser = async (username, password) => {
  const realm = await Realm();
  const user = realm.objects('User').filtered(`username == "${username}"`)[0];

  if (!user) {
    return { success: false, message: 'User not found' };
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    return { success: false, message: 'Invalid credentials' };
  }

  return { success: true, user };
};
