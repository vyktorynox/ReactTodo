import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAslt9BYyPM6JCMQLnwJYEPnyyrjgl1M5g",
    authDomain: "todoapp-962a5.firebaseapp.com",
    databaseURL: "https://todoapp-962a5.firebaseio.com",
    projectId: "todoapp-962a5",
    storageBucket: "todoapp-962a5.appspot.com",
    messagingSenderId: "346716131494"
  };

  firebase.initializeApp(config);
} catch (e) {
  console.error(e);
} finally {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
