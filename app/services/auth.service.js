import { authRef } from "./data.sevices";


export function logInWithEmailAndPassword(email,password){
 return authRef().signInWithEmailAndPassword(email,password);
}

export function signOut(){
    return authRef().signOut()
}