import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:4200/user-portal/users';

  getUsers() {
    /* let licitacoesFake = [{id: 1, objeto: 'x', prazo: '1', orgao: 'asd'},
     {id: 1, objeto: 'y', prazo: '3', orgao: 'dsa'},
     {id: 1, objeto: 'z', prazo: '5', orgao: 'das'},
     {id: 1, objeto: 'a', prazo: '3', orgao: 'sad'},
   ];
   return Observable.of(licitacoesFake).delay(5000);*/
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: number) {
    return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
