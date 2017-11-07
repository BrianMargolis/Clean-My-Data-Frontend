import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Ng4FilesModule } from 'angular4-files-upload';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CleanPageComponent } from './clean-page/clean-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    CleanPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng4FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
