import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng4FilesModule } from 'angular4-files-upload';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng4FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
