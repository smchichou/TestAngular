import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../services/user.service";
import {map, switchMap} from 'rxjs';
import {invokeProfilAPI,  profilFetchAPISuccess} from "./profil.action";
import {setCurrentPage} from "../breadcrumb/breadcrumb.action";
import {Store} from "@ngrx/store";

@Injectable()
export class ProfilEffect {
  /**
   * Constructor
   *
   * @param {Actions} actions$
   * @param {UserService} _userService
   * */

  constructor(
    private actions$: Actions,
    private _userService: UserService,
    private _store: Store,
  ) {
  }
  loadProfil$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeProfilAPI),
      switchMap((action) => {
        this._store.dispatch(setCurrentPage({current:{current:'Profil'}}))
        return this._userService
          .getUserByLogin(action.login)
          .pipe(map((data) => profilFetchAPISuccess({ profil: data })));
      })
    )
  );
}
