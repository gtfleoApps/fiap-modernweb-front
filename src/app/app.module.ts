import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNotesComponent } from './views/pages/list-notes/list-notes.component';
import { NoteComponent } from './views/pages/note/note.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FormNoteComponent } from './views/pages/form-note/form-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNotesComponent,
    NoteComponent,
    HomeComponent,
    FormNoteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
