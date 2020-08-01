import * as firebase from 'firebase';

// TODO: fill in your firebase config
const firebaseConfig = {
    apiKey: '***********************',
    authDomain: '***********************',
    databaseURL: '***********************',
    projectId: '***********************',
    appId: '***********************'
};

firebase.initializeApp(firebaseConfig);

export default firebase;