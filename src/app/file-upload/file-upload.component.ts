import { Component, EventEmitter, ViewChild, Output } from '@angular/core';
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
  @Output() onUpload = new EventEmitter<string>();

  @ViewChild('fileInput') fileInput
  alert = ""
  constructor(private http: Http) { }

  upload() {
    const files: FileList = this.fileInput.nativeElement.files;
    if (files.length === 0) {
      this.alert = "No file provided!"
      return;
    };
    if (files[0].type !== "text/csv") {
      this.alert = "Not a CSV file!"
      return;
    }

    const formData = new FormData();
    formData.append(files[0].name, files[0]);

    console.log(files)

    this.alert = ""
    this.http
      .post('http://127.0.0.1:5000/upload', formData)
      .subscribe(res => {
        var body = JSON.parse( res.text());
        var file_id = body['file_name'];
        this.onUpload.emit(file_id);
      });

  }
}