import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NotesData} from '../../providers/notes-data';
import { HomePage } from '../home/home';


/*
  Generated class for the NoteForm page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-form',
  templateUrl: 'note-form.html',
  providers: [NotesData]
})
export class NoteFormPage {

	public note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private notesDataService: NotesData) {
  	this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('Hello NoteFormPage Page');
  }

  saveTapped() {
  	this.notesDataService.updateNote(this.note).subscribe(
        data => {
        },
        err => console.error(err),
        () => {
        	this.navCtrl.push(HomePage);
        }
    );
  }

  setTitle(val) {
  	this.note.title = val;
  }

  setBody(val) {
  	this.note.body = val;
  }
}
