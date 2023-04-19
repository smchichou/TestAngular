import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repo} from "../models/repo";

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  host: string = environment.apiUrl + "users";
  /**
   * Constructor
   *
   * @param {HttpClient} _http
   * */
  constructor(private _http: HttpClient) {}

  getReposByLogin(login:string):Observable<Repo[]>{
    return this._http.get<Repo[]>(this.host+'/'+login+'/repos');
  }

  getRepoByLoginAndRepoName(login:string,repo_name:string):Observable<Repo>{
    return this._http.get<Repo>(environment.apiUrl+'repos/'+login+'/'+repo_name);
  }


}
