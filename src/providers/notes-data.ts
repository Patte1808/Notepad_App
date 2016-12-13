import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NotesData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NotesData {

  readonly host;

  constructor(public http: Http) {
    console.log('Hello NotesData Provider');
    this.host = 'http://localhost:3000/api/v1/'
  }

  getNotes() {
  	let notes = this.http.get(`${this.host}notes`).map(res => res.json());
  	return notes;
  }

  newNote(note) {
    return this.http.post(`${this.host}notes`, {
      note: note
    }).map((res) => res.json());
  }

  updateNote(note) {
    return this.http.put(`${this.host}notes/${note.id}`, {
      note: note
    }).map((res) => res.json());
  }

  removeNote(note) {
    return this.http.delete(`${this.host}notes/${note.id}`)
           .map((res) => res.json());
  }

}
