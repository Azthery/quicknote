import { Component, Input, OnInit } from '@angular/core';

import { note } from 'src/app/core/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input()
  note!: note
  
  constructor() { }

  ngOnInit(): void {
  }

}
