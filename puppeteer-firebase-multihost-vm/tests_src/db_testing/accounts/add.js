const fs = require('fs');
const admin = require('firebase-admin');

admin.initializeApp();

['helloworld'].every(async (username) => {
  await admin
    .auth()
    .createUser({
      uid: `${username}_uid`,
      email: `${username}@gmail.com`,
      password: '111111',
      displayName: `${username}@gmail.com`,
      disabled: false,
    })
    .then((userRecord) => console.log('Successfully created new user:', userRecord.uid))
    .catch((error) => console.error('Error creating new user:', error));
});
