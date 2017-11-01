import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Ng4FilesStatus,
  Ng4FilesSelected
} from 'angular4-files-upload';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @ViewChild('fileInput') fileInput
  constructor(private http: Http) { }

  upload() {
    const files: FileList = this.fileInput.nativeElement.files;
    if (files.length === 0) {
      return;
    };

    const formData = new FormData();
    formData.append(files[0].name, files[0]);

    console.log(files)

    this.http
      .post('http://127.0.0.1:5000/', formData)
      .subscribe();

  }
}