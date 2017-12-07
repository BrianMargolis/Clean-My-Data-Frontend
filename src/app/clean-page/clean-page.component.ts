import { Component, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.scss']
})
export class CleanPageComponent implements OnInit {
  @Input() fileId = ""

  cleaningFunctions = {
    "file_has_headers": false,
    "duplicates": {
      "friendly_text": "Check for duplicates?",
      "friendly_subtext": "Applies to strictly string columns only.",
      "enabled": false,
      "options": [{
        "name": "fuzzy",
        "friendly_text": "Use fuzzy matching?",
        "value": 0,
        "tip": "0 or 1"
      }, {
        "name": "fuzzy_ratio_threshold",
        "friendly_text": "Fuzzy matching ratio threshold:",
        "value": 70,
        "tip": "Between 0 and 100. Higher number = stricter matching."
      }
      ]
    },
    "wrong_types": {
      "friendly_text": "Check for inconsistent types?",
      "friendly_subtext": "",
      "enabled": false,
      "options": []
    },
    "outliers": {
      "friendly_text": "Check for outliers?",
      "friendly_subtext": "Applies to strictly numerical columns only.",
      "enabled": false,
      "options": []
    }
  }


  cleaningFunctionNames = ['duplicates', 'wrong_types', 'outliers']
  response = null
  downloadUrl = ""

  constructor(private http: Http) { }

  ngOnInit() {

  }

  identify_errors() {
    this.response = null;
    this.http
      .post('http://127.0.0.1:5000/identify_errors', { "file_name": this.fileId, "options": this.cleaningFunctions })
      .subscribe(res => {
        this.response = res.json();
      });
  }

  clean_data() {
    this.http
      .post('http://127.0.0.1:5000/clean_data', { "file_name": this.fileId })
      .subscribe(res => {
        var blob = new Blob([res.arrayBuffer()], { type: 'text/csv' });
        this.downloadUrl = URL.createObjectURL(blob);
        console.log(this.downloadUrl)
      });
  }

  download() {
    window.open(this.downloadUrl);
  }


}
