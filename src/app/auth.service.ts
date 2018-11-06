import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './app.module';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService{

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase){ 
  }    

    signIn(username: string, password: string){ 
        return this.afAuth.auth.signInWithEmailAndPassword(username,password);         
    }  

    signup(username: string, password: string){ // sign up method will receive the email and password entered
        return this.afAuth.auth.createUserWithEmailAndPassword(username,password);
    }

    getCurrentUser(){       
        return this.afAuth.authState;        
    }    

    logout(){
        this.afAuth.auth.signOut();
    }        
}