import {createReducer, on} from "@ngrx/store";
import {RepoFetchAPISuccess, reposFetchAPISuccess} from "./repos.action";
import {Repo} from "../../models/repo";
import {Profil} from "../../models/profil";

/*
* Empty array assigned as initial data of our store.
* */
export const initialReposState: ReadonlyArray<Repo> = [];
export const defaultRepo: Repo = {
  name: '',
};
export const initialRepoState: Readonly<Repo> = {
  ...defaultRepo
};
/*
*  Using 'createReducer' that loads from '@ngrx/store'
*  we created our 'reposReducer' by sending 'initialState' as an input parameter.
* */
export const reposReducer = createReducer(
  initialReposState,
  on(reposFetchAPISuccess, (state, { repos }) => {
    return repos;
  }),

);
export const repoReducer = createReducer(
  initialRepoState,
  on(RepoFetchAPISuccess, (state, { repo }) => {
    return repo;
  })

);

