import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-sample-page',
    templateUrl: './sample-page.component.html',
    styleUrls: ['./sample-page.component.scss'],
    imports: [BreadcrumbComponent]
})
export class SamplePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
