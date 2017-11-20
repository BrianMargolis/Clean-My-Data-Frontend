import { Component, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { OptionsComponent } from '../options/options.component'

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
  },
  {
    "title": "Pattern Matching",
    keys: ["g", "h", "i"]
  }]

  constructor(private http: Http) { }

  optionChange(optionSectionTitle: string, options) {
    this.options[optionSectionTitle] = options
  }

  clean() {
    this.http
      .post('http://127.0.0.1:5000/clean', { "file_name": this.fileId, "options": this.options })
      .subscribe(res => {
        console.log(res)
      });
  }

}
