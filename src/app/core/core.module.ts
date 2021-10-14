import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAuth } from '@angular/fire/compat/auth/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore  } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AuthService } from '../core/services/auth/auth.service';
import { NotesService } from './services/note/notes.service';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireAuth,
    AngularFireModule,
    AngularFirestoreModule,
  ],
  providers: [
    AuthService,
    NotesService
  ]
})
export class CoreModule { }
