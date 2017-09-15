import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCgfZyKhpY6qpqKCyNEcuBhbXldsxKDRAA",
  authDomain: "github-11e53.firebaseapp.com",
  databaseURL: "https://github-11e53.firebaseio.com",
  projectId: "github-11e53",
  storageBucket: "github-11e53.appspot.com",
  messagingSenderId: "425240417578"
});
const base = Rebase.createClass(app.database());
export default base;
