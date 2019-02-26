import { observable, action } from "mobx";
import { logInWithEmailAndPassword, signOut } from "../services/auth.service";

export default class Auth {
    @observable loading =false;

    @action
    LogIn(email,password,callback){
        this.loading=true;
        logInWithEmailAndPassword(email,password).then(()=>{
            this.loading=false;
            callback(true,null)
        }).catch(error=>{
            this.loading=false;
            callback(false,error)
        })
    }
    @action
    logOut(callback){
        signOut().then(()=>{
            callback(true,null)
        }).catch(error=>{
            callback(false,error)
        })
    }
}