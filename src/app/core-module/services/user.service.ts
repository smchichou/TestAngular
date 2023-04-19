import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profil} from "../models/profil";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  host: string = environment.apiUrl + "users";
  /**
   * Constructor
   *
   * @param {HttpClient} _http
   * */
  constructor(private _http: HttpClient) {}

  getUsers():Observable<User[]>{
    return this._http.get<User[]>(this.host);
  }

  getUserByLogin(login:string):Observable<Profil>{
    return this._http.get<Profil>(this.host+'/'+login);
  }
}
