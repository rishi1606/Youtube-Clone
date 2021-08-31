import firebase from 'firebase/app'

import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyATFqY-cSfOZ39X4bG65OQ951f-Q9a-vyw",
    authDomain: "clone-986cb.firebaseapp.com",
    projectId: "clone-986cb",
    storageBucket: "clone-986cb.appspot.com",
    messagingSenderId: "962896573393",
    appId: "1:962896573393:web:d71b07d2ddab6de2f8a6f0"
  };

  firebase.initializeApp(firebaseConfig);
  

  
  export default firebase.auth();