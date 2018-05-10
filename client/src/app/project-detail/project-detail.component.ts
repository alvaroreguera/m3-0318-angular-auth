
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../services/project.service";
import { UserService } from "../services/user.service";
import { TransactionService } from "../services/transaction.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { User } from '../project-interface';
import { Project } from '../project-interface';

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"]
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  comment: string;
  comments: Array<object>;
  user: User;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    public sessionService: SessionService,
    private projectService: ProjectService,
    private userService: UserService,
    private transactionService: TransactionService,
  ) {
    route.params.subscribe(params => {
      projectService.get(params.id).subscribe(project => {
        console.log(project)
        this.project = project;
      });
    });
  }

  ngOnInit() {
    this.user = this.sessionService.user;
  }

  financeProject(financed) {
    console.log("FINANCED PROJECT");
    this.project.financed += financed;
    this.project.sponsors.push(this.user._id);
    this.user.balance -= Number(financed);
    this.projectService.edit(this.project).subscribe(() => {
      this.userService.edit(this.user).subscribe(() => {
        this.transactionService.createTransaction(this.user._id, this.project, financed).subscribe(() =>{
          this.router.navigate(["/"]);
        })
      });
    });
  }

  deleteProject() {
    console.log("DELETED PROJECT");
    this.projectService.remove(this.project._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
