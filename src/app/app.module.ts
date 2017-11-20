import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { Ng4FilesModule } from 'angular4-files-upload';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CleanPageComponent } from './clean-page/clean-page.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    CleanPageComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng4FilesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
