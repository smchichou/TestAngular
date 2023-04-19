import { Component, OnInit } from '@angular/core';
import {Subject, switchMap} from "rxjs";
import {UserService} from "../../../../core-module/services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Profil} from "../../../../core-module/models/profil";
import {FollowerService} from "../../../../core-module/services/follower.service";
import {RepoService} from "../../../../core-module/services/repo.service";
import {Follower} from "../../../../core-module/models/follower";
import {Repo} from "../../../../core-module/models/repo";
import {select, Store} from "@ngrx/store";
import {selectUserById} from "../../../../core-module/store/profil/profil.selector";
import {invokeProfilAPI} from "../../../../core-module/store/profil/profil.action";
import {invokeFollowersAPI} from "../../../../core-module/store/followers/followers.action";
import {selectFollowers} from "../../../../core-module/store/followers/followers.selector";
import {invokeReposAPI} from "../../../../core-module/store/repos/repos.action";
import {selectRepos} from "../../../../core-module/store/repos/repos.selector";
import {setCurrentPage} from "../../../../core-module/store/breadcrumb/breadcrumb.action";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  // public
  public profil: Profil | undefined;
  public login: string = '' ;
  public nbrFollowers: number = 0 ;
  public nbrRepos: number = 0 ;
  //private
  private _unsubscribeAll: Subject<any>;
  /**
   * Constructor
   *
   * @param {UserService} _userService
   * @param {Store} _store
   * @param {FollowerService} _followerService
   * @param _repoService
   * @param {ActivatedRoute} _route
   * @param {Router} _router
   * */
  constructor(
    private _userService: UserService,
    private _store: Store,
    private _followerService: FollowerService,
    private _repoService: RepoService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._route.params.subscribe(params => {
      this.login = params['login'];
      this.getUser(this.login);
      this.getFollowers(this.login)
      this.getRepos(this.login)
    })
    this._unsubscribeAll = new Subject()

  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get user
   *
   */
  getUser(login:string) {
    this._store.dispatch(invokeProfilAPI({login}))
    let fetchData$  = this._store.pipe(select(selectUserById));
    fetchData$.subscribe((data) => {
      if (data) {
        this.profil = { ...data };
      }
      else{
        this._router.navigate(['/users']);
      }
    });
  }
  /**
   * Get followers of user
   *
   */
  getFollowers(login:string) {
    this._store.dispatch(invokeFollowersAPI({login}))
    this._store.pipe(select(selectFollowers)).subscribe((data : Follower[]) =>{
      this.nbrFollowers = data.length
    })
  }
  /**
   * Get repos of user
   *
   */
  getRepos(login:string) {
    this._store.dispatch(invokeReposAPI({login}))
    this._store.pipe(select(selectRepos)).subscribe((data : Repo[]) =>{
      this.nbrRepos = data.length

    })
  }
  /*
  * Dispatch an event to change the current page displayed in the breadcrumb.
  * */
  dispatchEvent(currentPage:string){
    this._store.dispatch(setCurrentPage({current:{current:currentPage}}))
  }
  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(true)
    this._unsubscribeAll.complete();
  }

}
