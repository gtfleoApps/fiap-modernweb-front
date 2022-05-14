import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/services/@types/note';

// interface Note {
//   id: number;
//   text: string;
//   date: Date;
//   urgent?: boolean; // ? indica que eh opcional  
// }

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // note = {
  //   id: 1,
  //   date: new Date(),
  //   text: "Um texto qualquer",
  //   urgent: true
  // }

  // @Input: decorator que indica que essa propriedade serah injetavel:
  @Input()
  noteProp = {} as Note;

  @Input()
  titleProp: any;

  // Expondo o evento para o pai (do note para list-note):
  @Output()
  notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  confirmRemove() {
    if (confirm("Deseja realmente apagar?")) {
      this.notify.emit();
    }
  }

}
