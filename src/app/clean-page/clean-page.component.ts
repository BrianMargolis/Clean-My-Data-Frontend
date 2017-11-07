import { Component, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.scss']
})
export class CleanPageComponent {
  @Input() fileId = ""
  constructor(private http: Http) { }

  outlierDetection() {
    this.http
      .post('http://127.0.0.1:5000/outlier_detection', {"file_id": this.fileId})
      .subscribe(res => {
        console.log(res)
      });
  }

}
