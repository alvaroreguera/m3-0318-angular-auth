
import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { User } from "../project-interface";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  //projects$:Observable<any>;
  projects:Array<any> = [];
  //projectsFinanced$:Observable<any>;
  projectsFinanced:Array<any> = [];

  constructor(private projectService:ProjectService) {
    // this.projects$ = projectService.getList();
    // this.projectsFinanced$ = projectService.getListFinanced();
    this.projectService.getList().subscribe( projects => this.projects = projects);
    this.projectService.getListFinanced().subscribe( projectsFinanced => this.projectsFinanced = projectsFinanced);
  }

  ngOnInit() {
  }

}
