import { Routes } from "@angular/router";
import {ProjectListComponent} from "./project-list/project-list.component"
import {ProjectDetailComponent} from "./project-detail/project-detail.component"

export const routes: Routes = [
  { path: '', component:  ProjectListComponent},
{ path: 'project/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];