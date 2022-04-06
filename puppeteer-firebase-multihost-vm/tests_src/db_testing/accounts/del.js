const fs = require('fs');
const admin = require('firebase-admin');

admin.initializeApp();

['helloworld'].every(async (username) => {
  await admin
    .auth()
    .deleteUser(`${username}_uid`)
    .then(() => console.log('Successfully deleted user'))
    .catch((err) => console.error('delete users', 'ignore err', uid));
});
