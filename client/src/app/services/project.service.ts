import { Injectable, EventEmitter } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import 'rxjs';
import { User } from '../project-interface'
import { Project } from '../project-interface'

@Injectable()
export class ProjectService {
  BASE_URL: string = 'http://localhost:3000';
  // defaultHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  // defaultOptions: RequestOptions = new RequestOptions({withCredentials: true });
  // userEvent: EventEmitter<any> = new EventEmitter();
  options: Object = { withCredentials: true };


  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/project`)
      .map((res) => res.json());
  }

  getListFinanced() {
    return this.http.get(`${this.BASE_URL}/api/project/financedProjects`, this.options)
      .map((res) => res.json());
  }

  getListCreated() {
    return this.http.get(`${this.BASE_URL}/api/project/createdProjects`, this.options)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/project/${id}`)
      .map((res) => res.json());
  }

  edit(project) {
    return this.http.put(`${this.BASE_URL}/api/project/${project._id}`, project)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/project/${id}`)
      .map((res) => res.json());
  }
}