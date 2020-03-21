import { Injectable } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { observable, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public UserData: Observable<firebase.User>;
  private email = new BehaviorSubject("No se ha registrado email");
  currentEmail = this.email.asObservable();
  public uid: string = '';
  public AuthState: any = null;

  constructor( private auth:AngularFireAuth ) { }

  loginByEmail(user: UserInterface) {
    const { email, password } = user;
    return this.auth.auth.signInWithEmailAndPassword(email,password);
  }

  setEmail(email:string) {
    console.log("entra s setemail");
    this.email.next(email);
  }
  setUid(uid:string) {
    this.uid = uid;
  }

  createUser(email:string,password:string) {
    return this.auth.auth.createUserWithEmailAndPassword(email,password);
  }
  logOut() {
    this.auth.auth.signOut();
  }
  getcurrentUserId() {
    return this.uid;
  }

  getCurrentEmail() {
    console.log("current email"+ this.email);
    return this.email;
  }
  updateDisplayName(name:string) {
    const updates = {displayName: name}
    return this.auth.auth.currentUser.updateProfile(updates);
  }
}
