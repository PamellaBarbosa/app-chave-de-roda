import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAXgB4ycp0EhKTarp47pEPfh0Tq5JHsZyI",
  authDomain: "chavelogin-24c4a.firebaseapp.com",
  projectId: "chavelogin-24c4a",
  storageBucket: "chavelogin-24c4a.appspot.com",
  messagingSenderId: "337512612996",
  appId: "1:337512612996:web:dd5dba03f091f701e52ed1"
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

const database = firebase.firestore();
export default database

export { auth };