
import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { User } from "../project-interface";
import { SessionService } from '../services/session.service';

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
  projectsCreated:Array<any> = [];
  accounts:any;
  projectsBalance:Array<any> = [];


  constructor(private projectService:ProjectService, public sessionService:SessionService) {
    // this.projects$ = projectService.getList();
    // this.projectsFinanced$ = projectService.getListFinanced();
    this.projectService.getList().subscribe( projects => this.projects = projects);
    this.projectService.getListFinanced().subscribe( projectsFinanced => this.projectsFinanced = projectsFinanced);
    this.projectService.getListCreated().subscribe( projectsCreated => this.projectsCreated = projectsCreated);
    const testAccounts = [];
    this.bindEvent(window, 'message', function (e) {
      //console.log(e.data);
      testAccounts.push(e.data);
    });
    this.projectService.balanceEvent.subscribe(p=> this.projects = p)
    setTimeout(()=>{
      this.accounts = testAccounts;
      //console.log(this.accounts)
    
        this.projectService.getBalance(this.accounts);
        this.projectService.balanceEvent.subscribe(p=> this.projects = p)
      
    }, 10000)
    
  }


  bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener){
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
  }

  ngOnInit() {
    this.projectService.balanceEvent.subscribe(p=> this.projects = p)
      
  }

  

}
