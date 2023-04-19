import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {select, Store} from "@ngrx/store";
import {EMPTY, map, mergeMap, switchMap, withLatestFrom} from 'rxjs';
import {invokeRepoAPI, invokeReposAPI, RepoFetchAPISuccess, reposFetchAPISuccess} from "./repos.action";
import {RepoService} from "../../services/repo.service";
import {selectRepos} from "./repos.selector";
import {invokeProfilAPI, profilFetchAPISuccess} from "../profil/profil.action";
import {setCurrentPage} from "../breadcrumb/breadcrumb.action";

@Injectable()
export class ReposEffect {
  /**
   * Constructor
   *
   * @param {Actions} _actions$
   * @param {RepoService} _repoService
   * @param {Store} _store
   * */

  constructor(
    private _actions$: Actions,
    private _repoService: RepoService,
    private _store: Store
  ) {

  }
  loadAllRepos$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeReposAPI),
      withLatestFrom(this._store.pipe(select(selectRepos))),
      mergeMap(([action, reposformStore]) => {
        if (reposformStore.length > 0) {
          return EMPTY;
        }
        this._store.dispatch(setCurrentPage({current:{current:'Repos'}}))
        return this._repoService
          .getReposByLogin(action.login)
          .pipe(map((data) => reposFetchAPISuccess({ repos: data })));
      })
    )
  );

  loadRepo$ = createEffect(() =>
    this._actions$.pipe(
      ofType(invokeRepoAPI),
      switchMap((action) => {
        this._store.dispatch(setCurrentPage({current:{current:'Repo'}}))
        return this._repoService
          .getRepoByLoginAndRepoName(action.login,action.repo_name)
          .pipe(map((data) => RepoFetchAPISuccess({ repo: data })));
      })
    )
  );

}
