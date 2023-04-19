import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../services/user.service";
import {select, Store} from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import {invokeUsersAPI, usersFetchAPISuccess} from "./users.action";
import {selectUsers} from "./users.selector";
import {setCurrentPage} from "../breadcrumb/breadcrumb.action";

@Injectable()
export class UsersEffect {
  /**
   * Constructor
   *
   * @param {Actions} _actions$
   * @param {UserService} _userService
   * @param {Store} _store
   * */

  constructor(
    private _actions$: Actions,
    private _userService: UserService,
    private _store: Store
  ) {

  }
  loadAllUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeUsersAPI),
      withLatestFrom(this._store.pipe(select(selectUsers))),
      mergeMap(([, userformStore]) => {
        if (userformStore.length > 0) {
          return EMPTY;
        }
        this._store.dispatch(setCurrentPage({current:{current:'Users'}}))
        return this._userService
          .getUsers()
          .pipe(map((data) => usersFetchAPISuccess({ allUsers: data })));
      })
    )
  );
}
