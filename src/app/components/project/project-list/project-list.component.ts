import { CommonModule,  } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import * as projectData from '../../../shared/data/components/project/project-list';
import { Project } from '../../../shared/interface/product-list';
@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    imports: [BreadcrumbComponent, CommonModule, RouterLink,]
})
export class ProjectListComponent implements OnInit {
  active = 1
  public openTab : string = "All";

  // data
  public ProjectLists = projectData.ProjectList
  listUser: Project[];
  filterData: any[] =  this.ProjectLists
  
  constructor() {}

  // data filter ALL DONE DOING
  public tabbed(val: string) {
    this.openTab = val
    
    this.filterData = val !== 'All' ? this.ProjectLists.filter((data: any)=>{
    return  data.badge == this.openTab ? true : false 
  }): this.ProjectLists      
  }

  ngOnInit(): void {
  }

}
