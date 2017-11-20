import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() optionKeys: string[] = [];
  // @Output() options = new EventEmitter<object>();
  options = {}
  constructor() { }

  set option(k) {
    console.log(k)
  }
  ngOnInit() {
  }

}
