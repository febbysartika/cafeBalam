import * as firebase from "firebase"
import { AccessibilityInfo } from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyD33IUbHx1EEpivxBuql-rM7kpPDdp6gBw",
    authDomain: "cafebalam-ee881.firebaseapp.com",
    projectId: "cafebalam-ee881",
    storageBucket: "cafebalam-ee881.appspot.com",
    messagingSenderId: "384253522416",
    appId: "1:384253522416:web:bee3d9a9616867fa2bed35",
    measurementId: "G-HYBWSC2M76"
};

if(firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;

