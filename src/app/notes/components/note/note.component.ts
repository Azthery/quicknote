import { Component, Input, OnInit } from '@angular/core';

import { note } from 'src/app/core/models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input()
  note!: note
  
  constructor(
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
  }

  removeThisNote(): void{
    this.notesService.removeNote(this.note.id);
  }
}
