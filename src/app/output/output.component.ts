import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() response;
  error_rate_table = []
  summary_stats_table = []

  constructor() { }

  ngOnInit() {
    var error_rates = this.response['error_rates'];
    var summary_stats = this.response['summary_stats']

    var column_indices = []
    for (var i = 0; i < error_rates.length; i++) {
      column_indices.push(i)
    }

    this.error_rate_table.push({
      "title": "Column #",
      "value": column_indices
    })
    this.error_rate_table.push({
      "title": "Error Rate",
      "value": error_rates
    })

    this.summary_stats_table.push({
      "title": "Column #",
      "value": summary_stats['columns']
    })
    this.summary_stats_table.push({
      "title": "Mean",
      "value": summary_stats['mean']
    })
    this.summary_stats_table.push({
      "title": "Standard Deviation",
      "value": summary_stats['standard_deviation']
    })
    this.summary_stats_table.push({
      "title": "Confidence Interval",
      "value": summary_stats['confidence_interval']
    })
    this.summary_stats_table.push({
      "title": "# Left-Tail Outliers",
      "value": summary_stats['low_outliers']
    })
    this.summary_stats_table.push({
      "title": "# Right-Tail Outliers",
      "value": summary_stats['high_outliers']
    })
  }

}
