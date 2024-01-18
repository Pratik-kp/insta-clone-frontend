import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAt6_arZQmlwNAf6qMMp3wYz1xUFbQ_wjk",
    authDomain: "instagram-clone-82e6b.firebaseapp.com",
    projectId: "instagram-clone-82e6b",
    storageBucket: "instagram-clone-82e6b.appspot.com",
    messagingSenderId: "55500152942",
    appId: "1:55500152942:web:0f1ec0d5f4b8b04321867f",
    measurementId: "G-L013QRS13G"
  });

const auth=firebase.auth();
const storage=firebase.storage();
export {storage,auth};
