import { Component } from '@angular/core';
import {
  Ng4FilesStatus,
  Ng4FilesSelected
} from 'angular4-files-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  file_id = ""
  onUpload(file_id: string) {
    this.file_id = file_id;
  }
}
