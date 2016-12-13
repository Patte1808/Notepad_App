import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteDetailsPage } from '../note-details/note-details';
import { NoteFormPage } from '../note-form/note-form';

import {NotesData} from '../../providers/notes-data';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NotesData]
})
export class HomePage {

	public notes: Array<any>;

  	constructor(public navCtrl: NavController, private notesDataService: NotesData) {
  		this.getNotes();
  	}

  	getNotes() {
  		this.notesDataService.getNotes().subscribe(
  			data => {
  				this.notes = data;
  			},
  			err => console.error(err),
  			() => console.log('Completed notes')
  		);
  	}	

  	itemTapped(note) {
  		console.log(note);
  		this.navCtrl.push(NoteDetailsPage, {
  			note: note
  		});
  	}

    newTapped() {
      this.navCtrl.push(NoteFormPage);
    }

    removeNote(note) {
      this.notesDataService.removeNote(note).subscribe(
        data => {

        },
        err => console.error(err),
        () => {
          for(let i = 0; i < this.notes.length; i++) {
            if(this.notes[i].id === note.id) {
              this.notes.splice(i, 1);
              break;
            }
          }
        }
      );  
    }

  	ionViewDidLoad() {
    	console.log('Hello HomePage Page');
  	}

}
