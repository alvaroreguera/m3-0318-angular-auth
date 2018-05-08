import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { ProjectService } from './services/project.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {routes} from './routes';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProjectListComponent,
    ProjectDetailComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }



