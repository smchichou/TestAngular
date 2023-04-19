import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Follower} from "../models/follower";

@Injectable({
  providedIn: 'root'
})
export class FollowerService {
  host: string = environment.apiUrl + "users";
  /**
   * Constructor
   *
   * @param {HttpClient} _http
   * */
  constructor(private _http: HttpClient) {}

  getFollowersByUser(login:string):Observable<Follower[]>{
    return this._http.get<Follower[]>(this.host+'/'+login+'/followers');
  }
}
