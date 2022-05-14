import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  title = "Título da Nota";
  notes = [] as Note[];
  // notes = [
  //   {
  //     id: 1,
  //     date: new Date(),
  //     text: "Um texto qualquer 1",
  //     urgent: false
  //   },
  //   {
  //     id: 2,
  //     date: new Date(),
  //     text: "Um texto qualquer 2",
  //     urgent: true
  //   },
  //   {
  //     id: 3,
  //     date: new Date(),
  //     text: "Um texto qualquer 3",
  //     urgent: true
  //   },
  //   {
  //     id: 4,
  //     date: new Date(),
  //     text: "Um texto qualquer 4",
  //     urgent: false
  //   }
  // ]  
  subscription: Subscription;

  // injetando a dependência do service:
  constructor(private noteService: NoteService) {
    // Atualizando a lista de notas:
    this.subscription = this.noteService.newNoteProvider.subscribe({
      next: (note: Note) => {
        // this.getApiNotes(); 
        this.notes.push(note);
      },
      error: () => { }
    });
  }

  // metodo do ciclo de vida do componente
  ngOnInit(): void {
    // this.notes = this.noteService.getNotes();    
    // complete: () => alert("Deu tudo certo!")
    this.getApiNotes();
  }

  getApiNotes() {
    this.noteService.getNotes().subscribe({
      next: (apiNotes) => this.notes = apiNotes,
      error: (error) => console.error(error),
    });
  }

  removeNote(noteId: number) {
    // this.notes = this.noteService.removeNote(noteId);
    this.noteService.removeNote(noteId).subscribe(
      // () => this.getApiNotes() // atualizacao chamando a api
      () => this.notes = this.notes.filter(note => note.id !== noteId) // atualizacao com filter
    );
  }

}
