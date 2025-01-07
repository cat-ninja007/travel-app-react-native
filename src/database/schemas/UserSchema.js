import Realm from 'realm';

const UserSchema = {
  name: 'User',
  properties: {
    id: 'string',
    name: 'string',
    email: 'string',
    password: 'string',
  },
};

const saveUserData = async (userData) => {
  try {
    const realm = await Realm.open({
      schema: [UserSchema],
    });

    realm.write(() => {
      realm.create('User', userData);
    });

    console.log('User data saved');
  } catch (error) {
    console.log('Error saving user data:', error);
  }
};
