import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';

import { MaterialModule } from '../material/material.module';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/note/note.component';
import { CreateNewNoteComponent } from './components/create-new-note/create-new-note.component';

@NgModule({
  declarations: [
    NotesComponent,
    NoteComponent,
    CreateNewNoteComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MaterialModule,
  ]
})
export class NotesModule { }
