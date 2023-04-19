import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import {selectFollowers} from "./followers.selector";
import {followersFetchAPISuccess, invokeFollowersAPI} from "./followers.action";
import {FollowerService} from "../../services/follower.service";
import {setCurrentPage} from "../breadcrumb/breadcrumb.action";

@Injectable()
export class FollowersEffect {
  /**
   * Constructor
   *
   * @param {Actions} _actions$
   * @param {FollowerService} _followerService
   * @param {Store} _store
   * */

  constructor(
    private _actions$: Actions,
    private _followerService: FollowerService,
    private _store: Store
  ) {

  }
  loadAllFollowers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeFollowersAPI),
      withLatestFrom(this._store.pipe(select(selectFollowers))),
      mergeMap(([action, followerformStore]) => {
        if (followerformStore.length > 0) {
          return EMPTY;
        }
        this._store.dispatch(setCurrentPage({current:{current:'Followers'}}))
        return this._followerService
          .getFollowersByUser(action.login)
          .pipe(map((data) => followersFetchAPISuccess({ followers: data })));
      })
    )
  );
}
