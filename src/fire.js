import firebase from 'firebase';

// https://www.codementor.io/yurio/all-you-need-is-react-firebase-4v7g9p4kf

const config = {
  apiKey: "AIzaSyCgfZyKhpY6qpqKCyNEcuBhbXldsxKDRAA",
  authDomain: "github-11e53.firebaseapp.com",
  databaseURL: "https://github-11e53.firebaseio.com",
  projectId: "github-11e53",
  storageBucket: "github-11e53.appspot.com",
  messagingSenderId: "425240417578"
};
const fire = firebase.initializeApp(config);
export default fire;
