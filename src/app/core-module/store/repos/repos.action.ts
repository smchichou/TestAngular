import {createAction, props} from "@ngrx/store";
import {Repo} from "../../models/repo";
/*
* An action called 'invokeReposAPI' has been defined, which will trigger the invocation of an API call.
* */
export const invokeReposAPI = createAction(
  '[Repos API] Invoke Repos Fetch API',
  props<{login:string}>()

);
/*
*  The action 'reposFetchAPISuccess' has been defined to be invoked after a successful API call.
*  This action method is responsible for storing the API response into the store.
* */
export const reposFetchAPISuccess = createAction(
  '[Repos API] Fetch API Success',
  props<{ repos: Repo[] }>()
);

export const invokeRepoAPI = createAction(
  '[Repo API] Invoke Repo by login and repo_name Fetch API',
  props<{login:string,repo_name:string}>()
);
export const RepoFetchAPISuccess = createAction(
  '[Repo API] Fetch API Success',
  props<{ repo: Repo  }>()
);
