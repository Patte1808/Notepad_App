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

  constructor(public http: Http) {
    console.log('Hello NotesData Provider');
  }

  getNotes() {
  	let notes = this.http.get(`http://localhost:3000/notes.json`).map(res => res.json());
  	return notes;
  }

}
