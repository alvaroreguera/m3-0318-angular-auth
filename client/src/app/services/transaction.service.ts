
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs';
import { User } from '../project-interface';
import { Project } from '../project-interface';
import { Observable } from 'rxjs/Rx';


const BASEURL = 'http://localhost:3000';

@Injectable()
export class TransactionService {
  BASE_URL: string = 'http://localhost:3000';
  options: any = { withCredentials: true };
  constructor(private http: Http) {}

getTransaction(){
  return this.http.get(`${BASEURL}/api/transaction/`)
    .map((res) => res.json());
}
createTransaction(userId, projectId, ammount){
  const transaction = {
    userId,
    projectId,
    ammount
  }
  return this.http.post(`${BASEURL}/api/transaction/`, transaction, this.options)
  .map((res) => res.json())
}

getTransactionsById(option, id){
  return this.http.get(`${BASEURL}/api/transaction/${option}/${id}`)
  .map((res) => res.json());
}



}