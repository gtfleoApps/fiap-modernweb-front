import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  title = "FIAP NOTES"
  logoImage = "/assets/logo.png"

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private noteService: NoteService) {
    this.checkoutForm = this.formBuilder.group({
      // campos do formulario:
      textNote: ['',
        [Validators.required,
        Validators.minLength(5)]], // formControlName no html
    })
  }

  ngOnInit(): void {
  }

  sendNote() {
    if (this.checkoutForm.valid) {
      // alert(this.checkoutForm.value.textNote);
      this.noteService.postNotes(this.checkoutForm.value.textNote).subscribe({
        // Sucesso; recebe algo do post <um Note>:
        next: (note) => {
          this.checkoutForm.reset();
          this.noteService.notifyNewNoteAdded(note);
        },
        error: (error) => alert("Algo errado na inserção! " + error)
      });
    }
  }

  get textNote() {
    return this.checkoutForm.get('textNote');
  }

}
