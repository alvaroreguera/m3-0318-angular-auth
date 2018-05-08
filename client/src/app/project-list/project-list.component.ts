
import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects$:Observable<any>;
  projects:Array<any> = [];

  constructor(projectService:ProjectService) {
    this.projects$ = projectService.getList();
    projectService.getList().subscribe( projects => this.projects = projects);
  }

  ngOnInit() {
  }

}
