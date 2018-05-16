import { Component, ViewChild, ElementRef, OnInit, Renderer2, AfterViewInit } from "@angular/core";
import { ProjectService } from "../services/project.service";
import { UserService } from "../services/user.service";
import { TransactionService } from "../services/transaction.service";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { User } from "../project-interface";
import { Project } from "../project-interface";

@Component({
  selector: "app-project-detail",
  templateUrl: "./project-detail.component.html",
  styleUrls: ["./project-detail.component.css"]
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  project: any;
  @ViewChild('checkout') iframe: ElementRef;
  user: User;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    public sessionService: SessionService,
    private projectService: ProjectService,
    private userService: UserService,
    private transactionService: TransactionService, 
    private rd: Renderer2
  ) {
    route.params.subscribe(params => {
      projectService.get(params.id).subscribe(project => {
        this.project = project;

        // this.send();
        
        //document.getElementById('checkout').addEventListener('load', this.send) ;
       
        this.bindEvent(window, 'message', function (e) {
           //console.log(e.data);

           
      });
      });
    });
  }

  ngOnInit() {
    this.user = this.sessionService.user;
    //setTimeout(this.send, 5000);
    
  }

  checkBalance(amount) {
    if (this.sessionService.user.balance >= amount) {
      return true;
    }
    return false;
  }

  financeProject(financed) {
    if (this.checkBalance(financed)) {
      console.log("FINANCED PROJECT");
      this.project.financed += financed;
      this.project.sponsors.push(this.user._id);
      this.user.balance -= Number(financed);
      this.projectService.edit(this.project).subscribe(() => {
        this.userService.edit(this.user).subscribe(() => {
          this.transactionService
            .createTransaction(this.user._id, this.project, financed)
            .subscribe(() => {
              this.router.navigate(["/"]);
            });
        });
      });
    } else {
      alert("You don't have enough funds!");
    }
  }

  deleteProject() {
    console.log("DELETED PROJECT");
    this.projectService.remove(this.project._id).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener){
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
  }


  ngAfterViewInit () {
    //this.send();
  }

  send(){
    this.iframe.nativeElement.contentWindow.postMessage("holaSusana", '*');
    // console.log("TTTEEST")
    // console.log(this.iframe);
    //this.rd.selectRootElement(this.iframe).postMessage("holaSusana", '*')
  }
  


}
