import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import MainStack from './src/components/MainStack';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from './src/actions';

class AppInit extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDiSJPVfG3hmfRdN-zHLBlHs_yTH5Dz7hE",
      authDomain: "instagrinjc10-d48f4.firebaseapp.com",
      databaseURL: "https://instagrinjc10-d48f4.firebaseio.com",
      projectId: "instagrinjc10-d48f4",
      storageBucket: "instagrinjc10-d48f4.appspot.com",
      messagingSenderId: "70394107826",
      appId: "1:70394107826:web:b5ac4fe2b1af5b81d736ab",
      measurementId: "G-GYGYMNYEW4"
    };
    // Initialize Firebase
    //console.log('Isi Firebase Apps', firebase.apps)
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
      <MainStack />
    )
  }
}

export default connect(null, { notLoginYet, alreadyLogin })(AppInit);