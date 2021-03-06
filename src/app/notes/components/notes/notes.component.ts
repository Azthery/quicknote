import { Component, OnInit } from '@angular/core';

import { note } from 'src/app/core/models/note.model';
import { NotesService } from 'src/app/core/services/note/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes!: note[];

  constructor(
    private noteService: NotesService,
  ) { }

  ngOnInit(): void {
    this.notes = this.noteService.notes;
  }

}
