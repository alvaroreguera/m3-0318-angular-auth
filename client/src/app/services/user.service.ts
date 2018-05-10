
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { User } from '../project-interface'


@Injectable()
export class UserService {
    BASE_URL: string = 'http://localhost:3000';
  user: User;
  userEvent: EventEmitter<any> = new EventEmitter();
  options: any = { withCredentials:true };

  constructor(private http: Http) {}

  edit(user) {
    return this.http.put(`${this.BASE_URL}/api/user/${user._id}`, user)
      .map((res) => res.json());
  }

}


