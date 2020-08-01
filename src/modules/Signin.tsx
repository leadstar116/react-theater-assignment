import React, { useEffect } from 'react';
import Firebase from '../services/firebase';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // TODO: Store user details
        history.push('/theater');
      }
    });
  });
  const redirect = () => {
    const provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider);
  };

  return ( 
    <div 
      style={{
        top : '20%',
        left : '40%',
        position : 'fixed',
        textAlign : 'center'
      }}
    >
      <h1> Remo Ludo </h1>
      <button onClick={redirect}> SignIn With Google </button>
    </div> 
  );
};
 
export default SignIn;