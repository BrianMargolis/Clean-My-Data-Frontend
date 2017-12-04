import { Component, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { OptionsComponent } from '../options/options.component'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-clean-page',
  templateUrl: './clean-page.component.html',
  styleUrls: ['./clean-page.component.scss']
})
export class CleanPageComponent implements OnInit {
  @Input() fileId = ""
  options = {
    "file_has_headers": false,
    "duplicates": {
      "enabled": false,
    },
    "outliers": {
      "enabled": false,
    },
    "wrong_types": {
      "enabled": false,
    },
  }

  cleaningFunctions = {
    "duplicates": {
      "friendly_text": "Check for duplicates?",
      "friendly_subtext": "",
      "enabled": false,
      "options": [{
        "name": "fuzzy",
        "friendly_text": "Use fuzzy matching?",
        "value": 0,
        "tip": "0 or 1"
      }, {
        "name": "fuzzy_ratio_threshold",
        "friendly_text": "Fuzzy matching ratio threshold:",
        "value": 0,
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
      "options": [{
        "name": "alpha",
        "friendly_text": "Alpha value for confidence interval:",
        "value": .95,
        "tip": "Between 0 and 1."
      }]
    }
  }


  cleaningFunctionNames = ['duplicates', 'wrong_types', 'outliers']

  badLines: number[][] = [];
  downloadUrl = ""

  constructor(private http: Http) { }

  ngOnInit() {

  }

  optionChange(optionSectionTitle: string, options) {
    this.options[optionSectionTitle] = options
  }

  identify_errors() {
    this.http
      .post('http://127.0.0.1:5000/identify_errors', { "file_name": this.fileId, "options": this.options })
      .subscribe(res => {
        this.badLines = res.json();
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
