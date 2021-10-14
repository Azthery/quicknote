import { Component, Input, OnInit } from '@angular/core';

import { note } from '@core/models/note.model';
import { NotesService } from 'src/app/core/services/note/notes.service';

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
