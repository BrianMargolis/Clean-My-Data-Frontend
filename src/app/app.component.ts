import { Component } from '@angular/core';
import {
  Ng4FilesStatus,
  Ng4FilesSelected
} from 'angular4-files-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedFiles;

  public filesSelect(selectedFiles: Ng4FilesSelected): void {
    if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
      this.selectedFiles = selectedFiles.status;
      return;

      // Hnadle error statuses here
    }

    var file = selectedFiles.files[0]

    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      console.log(this.result);
    };
    reader.readAsText(file);

    this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
    console.log(this.selectedFiles)
  }
}
