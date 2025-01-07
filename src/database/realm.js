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

const realm = new Realm({ schema: [UserSchema] });

export default realm;
