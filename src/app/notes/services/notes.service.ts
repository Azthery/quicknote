import { Injectable } from '@angular/core';
import { note } from '../../core/models/note.model'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: note[];

  constructor() {
    this.notes = [
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: '8 de octubre del 2021',
        id: 1
      },
      {
        title: 'Nota 2',
        text: 'Texto texto texto!! owo',
        date: '8 de octubre del 2021',
        id: 2
      },
      {
        title: 'Nota 3',
        text: 'Hoy tengo muchas ganas de comer un kuchen, aun que sea de sarten',
        date: '8 de octubre del 2021',
        id: 3
      },
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: '8 de octubre del 2021',
        id: 1
      },
      {
        title: 'Nota 2',
        text: 'Texto texto texto!! owo',
        date: '8 de octubre del 2021',
        id: 2
      },
      {
        title: 'Nota 3',
        text: 'Hoy tengo muchas ganas de comer un kuchen, aun que sea de sarten',
        date: '8 de octubre del 2021',
        id: 3
      },
      {
        title: 'Nota 1',
        text: 'Soy un teeexto jejejejeje y ahora tengo que rellenar para agregar mas texto oeoeoe aaaahh',
        date: '8 de octubre del 2021',
        id: 1
      },
      {
        title: 'Nota 2',
        text: 'Texto texto texto!! owo',
        date: '8 de octubre del 2021',
        id: 2
      },
      {
        title: 'Nota 3',
        text: 'Hoy tengo muchas ganas de comer un kuchen, aun que sea de sarten aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        date: '8 de octubre del 2021',
        id: 3
      },
      {
        title: 'Nota 2',
        text: 'Texto texto texto!! owo',
        date: '8 de octubre del 2021',
        id: 2
      },
    ]
   }
}
