import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyC4DffbMF4ag7Aa4EmaebCX7W9rQux6840",
    authDomain: "proyectotiendaonline-a5793.firebaseapp.com",
    projectId: "proyectotiendaonline-a5793",
    storageBucket: "proyectotiendaonline-a5793.appspot.com",
    messagingSenderId: "144779905616",
    appId: "1:144779905616:web:422aaba22503c2d9989f55"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
export const storage = firebase.storage();

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint}

db.settings({ timestampsInSnapshots: true })

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
          console.log(error)
      })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}