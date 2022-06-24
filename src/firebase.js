import { initializeApp } from "firebase/app";

import {getMessaging, getToken, onMessage} from 'firebase/messaging'

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyB1RGX10kQS968BP8neMleconBLdsZTNLM",
  authDomain: "profillipe-alunofiec.firebaseapp.com",
  projectId: "profillipe-alunofiec",
  storageBucket: "profillipe-alunofiec.appspot.com",
  messagingSenderId: "275122333834",
  appId: "1:275122333834:web:7f1c7511ae1b7b150a2573",
  measurementId: "G-LBNH74PVGS"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


export const requestForToken = (setTokenFound, setToken) => {
    return getToken(messaging, {vapidKey: "BF65TU5vibdTI0TeEMwhtWDjZMTLfajS4yy8LXY0A-iuEVeBLt6xHEdQgmHGP_jIl0nRTNQu3uhnjeiwQkEx6jA"})
    .then((currentToken) => {
        if(currentToken){
            console.log("token atual: ", currentToken);
            setTokenFound(true);
            setToken(currentToken)
        } else {
            console.log("Falta permissao")
        }
    }).catch((err) => console.log("Um erro aconteceu - ", err))
}



export const onMessageListener = () => {
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        })
    })
}