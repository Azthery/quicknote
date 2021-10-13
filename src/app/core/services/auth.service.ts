import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  createUser(email: string, password:string): any{
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password:string): any{
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logOut(): any {
    return this.afAuth.signOut();
  }

  hasUser(): any{
    return this.afAuth.authState;
  }
}
