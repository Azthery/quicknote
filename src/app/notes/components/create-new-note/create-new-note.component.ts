import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';
import { note } from 'src/app/core/models/note.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-create-new-note',
  templateUrl: './create-new-note.component.html',
  styleUrls: ['./create-new-note.component.scss']
})
export class CreateNewNoteComponent implements OnInit {

  public form!: FormGroup;
  public date: number;

  constructor(
    private noteService: NotesService,
  ) {
    this.date = Date.now();
    this.refleshDate();
    this.buildForm();
   }

  ngOnInit(): void {
    
  }

  buildForm(): void{
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      id: new FormControl( this.noteService.notes.length ),
      date: new FormControl( Date.now().toString() )
    })
  }

  addNote(): void{
    this.noteService.addNewNote(this.form.value);
    this.buildForm();
  }

  refleshDate(): void{
    timer(0, 1000).subscribe(() => this.date = Date.now());
  }
}
