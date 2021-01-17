import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD8MusjsMu0tpo6ZJXa-6KUw4deP7IIrJQ",
    authDomain: "catch-of-the-day-react-edcd8.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-react-edcd8-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp }

//this is a default export
export default base;