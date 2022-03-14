
import * as firebase from "firebase";
import "firebase/database";
//this uses firebase v7 not 9!
const firebaseConfig = {
  apiKey: "AIzaSyBdaRyl_qt4nBVnOfbWJA1cyxM2wLyECaI",
  authDomain: "tasks-daac0.firebaseapp.com",
  projectId: "tasks-daac0",
  databaseURL:'https://tasks-daac0-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: "tasks-daac0.appspot.com",
  messagingSenderId: "672296709689",
  appId: "1:672296709689:web:4eb118b75e0a567df3e7e8",
};


firebase.initializeApp(firebaseConfig);
export default  firebase.database();