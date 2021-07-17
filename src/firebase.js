import firebase from 'firebase';


const firebaseConfig = {
  apiKey: 'AIzaSyDwpta0z6q80vxng5VzWvoat509tyw_t94',
  authDomain: 'disneyplus-app-6dc4c.firebaseapp.com',
  projectId: 'disneyplus-app-6dc4c',
  storageBucket: 'disneyplus-app-6dc4c.appspot.com',
  messagingSenderId: '857527800759',
  appId: '1:857527800759:web:ebb89c3fff9f319c4b0e32',
  measurementId: 'G-9R1QERKZX5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
