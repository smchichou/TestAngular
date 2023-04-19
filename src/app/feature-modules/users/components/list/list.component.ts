import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core-module/models/user";
import {map, Observable, Subject} from "rxjs";
import {FormControl} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {invokeUsersAPI} from "../../../../core-module/store/users/users.action";
import {selectUsers} from "../../../../core-module/store/users/users.selector";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // public
  public users$: Observable<User[]> = this._store.pipe(select(selectUsers));
  public filteredUsers$: Observable<User[]> = this.users$;
  public searchTerm = new FormControl('');
  //private
  private _unsubscribeAll: Subject<any>;
  /**
   * Constructor
   *
   * @param {Store} _store
   * */
  constructor(private _store :Store ) {
    this.getUsers();
    this._unsubscribeAll = new Subject();
    this.searchTerm.valueChanges.subscribe((search:any) => {
      this.filterUsers(search);
    });
  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get All users
   *
   */
  getUsers() {
    this._store.dispatch(invokeUsersAPI());
  }
  /**
   * search function
   *
   */
  filterUsers(search: string) {
    if(this.users$ != undefined){
      this.filteredUsers$ = this.users$.pipe(
        map(users => {
          if (!this.searchTerm) {
            return users;
          }
          return users.filter(user =>
            user.login?.toLowerCase().includes(search.toLowerCase())
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
