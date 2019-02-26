import firebase from 'react-native-firebase'

const db= firebase.firestore();

export function authRef(){
    return firebase.auth();
}