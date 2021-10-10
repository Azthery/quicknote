import { Injectable } from '@angular/core';
import { note } from '../../core/models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: note[];

  addNewNote(newNote: note): void{
    this.notes.push(newNote);
  }

  constructor() {
    this.notes = [
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: 1633839182011,
        id: 1
      },
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: 1633839182011,
        id: 1
      },
      {
        title: 'Nota 3',
        text: 'Hoy tengo muchas ganas de comer un kuchen, aun que sea de sarten aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        date: 1633839182011,
        id: 3
      },
      {
        title: 'Nota 2',
        text: 'Texto texto texto!! owo',
        date: 1633839182011,
        id: 2
      },
    ]
   }
}
