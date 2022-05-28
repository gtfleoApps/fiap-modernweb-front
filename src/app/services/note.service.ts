import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from './@types/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl: string;

  private newNoteSource = new Subject<Note>(); // Trafega objeto do tipo Note
  newNoteProvider = this.newNoteSource.asObservable();

  constructor(private http: HttpClient) {
    this.apiUrl = "https://fiap-notes-api.herokuapp.com"
    // this.apiUrl = "https://localhost:3333"
  }

  private notes = [
    {
      id: 1,
      date: new Date(),
      text: "Um texto qualquer 1",
      urgent: false
    },
    {
      id: 2,
      date: new Date(),
      text: "Um texto qualquer 2",
      urgent: true
    },
    {
      id: 3,
      date: new Date(),
      text: "Um texto qualquer 3",
      urgent: true
    },
    {
      id: 4,
      date: new Date(),
      text: "Um texto qualquer 4",
      urgent: false
    }
  ];

  notifyNewNoteAdded(note: Note) {
    this.newNoteSource.next(note);
    // this.newNoteSource.error("algum excpetion");
  }

  getNotes() {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
    // return this.notes;
  }

  removeNote(noteId: number) {
    // Filtro para montar lista de notas, desde que o id seja diferente da 
    // nota (filha) que emitiu o evento click:    
    // this.notes = this.notes.filter(note => note.id !== noteId);
    // return this.notes;
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  postNotes(textNote: string) {
    // o post retorna algo <aqui declarado um Note>:
    return this.http.post<Note>(`${this.apiUrl}/notes`, { text: textNote });
  }

  putNote(noteId: number, textNote: string) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${noteId}`, { text: textNote });
  }

  // --------------------------------------------
  private noteToFormSource = new Subject<Note>();
  editNoteProvider = this.noteToFormSource.asObservable();

  notifySendNoteToForm(note: Note) {
    this.noteToFormSource.next(note);
  }
}
