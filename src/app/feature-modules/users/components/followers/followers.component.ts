import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, Subject} from "rxjs";
import {Follower} from "../../../../core-module/models/follower";
import {ActivatedRoute} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {invokeFollowersAPI} from "../../../../core-module/store/followers/followers.action";
import {selectFollowers} from "../../../../core-module/store/followers/followers.selector";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  // public
  public followers$: Observable<Follower[]> = this._store.pipe(select(selectFollowers));
  public filteredFollowers$: Observable<Follower[]> = this.followers$;
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
      this.getFollowers(this.login);
    })
    this._unsubscribeAll = new Subject();
    this.searchTerm.valueChanges.subscribe((search:any)  => {
      this.filterFollowers(search);
    });
  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get All followers of user
   *
   */
  getFollowers(login:string) {
    this._store.dispatch(invokeFollowersAPI({login}));
  }
  /**
   * search function
   *
   */
  filterFollowers(search: string) {
    if(this.filteredFollowers$ != undefined){
      this.filteredFollowers$ = this.followers$.pipe(
        map(followers => {
          if (!this.searchTerm) {
            return followers;
          }
          return followers.filter(follwer =>
            follwer.login?.toLowerCase().includes(search.toLowerCase())
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
