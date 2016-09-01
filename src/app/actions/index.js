import Firebase from 'firebase';
import {FETCH_LEVEL, LEVEL_UP} from './types';

// Firebase Connection
// const Levels = new Firebase("https://reactnativeboilerplate-7c28b.firebaseio.com");

var firebaseConfig = {
  apiKey: "AIzaSyCYRzksZcNQ3jpv3thOorR-ckD_qVvpNZw",
  authDomain: "reactnativeboilerplate-7c28b.firebaseapp.com",
  databaseURL: "https://reactnativeboilerplate-7c28b.firebaseio.com",
  storageBucket: "reactnativeboilerplate-7c28b.appspot.com",
};

Firebase.initializeApp(firebaseConfig);

const Levels = Firebase.database().ref();

export function fetchLevel(){
  return function(dispatch){
    Levels.on('value', function(snapshot){
      dispatch({
        type: FETCH_LEVEL,
        payload: snapshot.val()
      })
    })
  }
}

export function levelUp(level){
  return function(dispatch){
    Levels.set({level: level + 1})
  }
}
