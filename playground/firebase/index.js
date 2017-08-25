import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAslt9BYyPM6JCMQLnwJYEPnyyrjgl1M5g",
  authDomain: "todoapp-962a5.firebaseapp.com",
  databaseURL: "https://todoapp-962a5.firebaseio.com",
  projectId: "todoapp-962a5",
  storageBucket: "todoapp-962a5.appspot.com",
  messagingSenderId: "346716131494"
};

firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Javier',
    age: 41
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog!!!'
});
todosRef.push({
  text: 'Feed the cat!!!'
});
