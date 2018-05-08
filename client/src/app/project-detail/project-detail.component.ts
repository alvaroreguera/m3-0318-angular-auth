
import { Component, OnInit } from "@angular/core";
import { ProjectService } from "../services/project.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"]
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  comment: string;
  comments: Array<object>;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private projectService: ProjectService,
  ) {
    route.params.subscribe(params => {
      projectService.get(params.id).subscribe(project => {
        console.log(project)
        this.project = project;
      });
    });
  }

  ngOnInit() {}


  deleteProject() {
    console.log("DELETED PROJECT");
    this.projectService.remove(this.project._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

}
