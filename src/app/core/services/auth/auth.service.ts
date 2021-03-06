import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string): any{
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): any{
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logOut(): any {
    return this.af.signOut();
  }

  user(): any{
    return this.af;
  }

  hasUser(): any {
    return this.af.authState;
  }
}
