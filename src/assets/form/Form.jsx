import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDA9FpDj04a9VkKfWFC8biNf42wh9ckTtc",
    authDomain: "portfolio-react-182fb.firebaseapp.com",
    projectId: "portfolio-react-182fb",
    storageBucket: "portfolio-react-182fb.appspot.com",
    messagingSenderId: "290885517160",
    appId: "1:290885517160:web:4c1f2ceff08288235460dd"
  };

  if(!firebase.app.lenth){
    firebase.initializeApp(firebaseConfig);
  }

  export const firestore = firebase.firestore()