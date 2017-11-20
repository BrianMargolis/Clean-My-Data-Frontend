import { Component, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.scss']
})
export class CleanPageComponent {
  @Input() fileId = ""
  options = {}
  optionSections = [{
    "title": "Fuzzy Matching",
    keys: ["a", "b", "c"]
  },
  {
    "title": "Outlier Detection",
    keys: ["d", "e", "f"]
  }]

  constructor(private http: Http) { }

  outlierDetection() {
    this.http
      .post('http://127.0.0.1:5000/outlier_detection', { "file_id": this.fileId })
      .subscribe(res => {
        console.log(res)
      });
  }

  clean() {
    this.http
      .post('http://127.0.0.1:5000/clean', { "file_id": this.fileId, "options": this.options })
      .subscribe(res => {
        console.log(res)
      });
  }

}
