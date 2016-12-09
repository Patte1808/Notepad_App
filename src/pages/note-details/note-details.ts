import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NoteDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-details',
  templateUrl: 'note-details.html'
})
export class NoteDetailsPage {

	public note;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('Hello NoteDetailsPage Page');
  }

}
