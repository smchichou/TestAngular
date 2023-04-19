import { Component, OnInit } from '@angular/core';
import {map, Observable, Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {selectRepos} from "../../../../core-module/store/repos/repos.selector";
import {Repo} from "../../../../core-module/models/repo";
import {invokeReposAPI} from "../../../../core-module/store/repos/repos.action";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  public repos$: Observable<Repo[]> = this._store.pipe(select(selectRepos));
  public filteredrepos$: Observable<Repo[]> = this.repos$;
  public searchTerm = new FormControl('');
  public login: string = '' ;

  //private
  private _unsubscribeAll: Subject<any>;
  /**
   * Constructor
   *
   * @param {Store} _store
   * @param {ActivatedRoute} _route
   * */
  constructor(
    private _store :Store,
    private _route: ActivatedRoute,

  ) {
    this._route.params.subscribe(params => {
      this.login = params['login'];
      this.getRepos(this.login);
    })
    this._unsubscribeAll = new Subject();
    this.searchTerm.valueChanges.subscribe((search:any)  => {
      this.filterRepos(search);
    });
  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get All repos of user
   *
   */
    getRepos(login:string) {
    this._store.dispatch(invokeReposAPI({login}));
  }
  /**
   * search function
   *
   */
  filterRepos(search: string) {
    if(this.filteredrepos$ != undefined){
      this.filteredrepos$ = this.repos$.pipe(
        map(repos => {
          if (!this.searchTerm) {
            return repos;
          }
          return repos.filter(repo =>
            repo.name?.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    }
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
