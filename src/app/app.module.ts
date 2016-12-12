import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteDetailsPage } from '../pages/note-details/note-details';
import { NoteFormPage } from '../pages/note-form/note-form';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoteDetailsPage,
    NoteFormPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NoteDetailsPage,
    NoteFormPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
