import firebase from 'firebase';
    const config = {
        apiKey: "AIzaSyD1igByDNK6foguQ4yZNsRA0xFhNfza0YY",
        authDomain: "flata-a8fe4.firebaseapp.com",
        databaseURL: "https://flata-a8fe4.firebaseio.com",
        projectId: "flata-a8fe4",
        storageBucket: "flata-a8fe4.appspot.com",
        messagingSenderId: "467861912951"
    };

firebase.initializeApp(config);
export default firebase;
