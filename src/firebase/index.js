import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-8tS65GXwdVwV5LG1-K8RDw4g6YpZjeU",
    authDomain: "react-cricket-2d5db.firebaseapp.com",
    projectId: "react-cricket-2d5db",
    storageBucket: "react-cricket-2d5db.appspot.com",
    messagingSenderId: "1061090727197",
    appId: "1:1061090727197:web:154bfbdcc53691f519fdf4",
    measurementId: "G-NC5474XQKT"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const storage = firebase.storage();

  export { storage, firebase as default};