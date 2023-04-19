import {createAction, props} from "@ngrx/store";
import {Profil} from "../../models/profil";
/*
* An action called 'invokeProfilAPI' has been defined, which will trigger the invocation of an API call.
* */
export const invokeProfilAPI = createAction(
  '[Profil API] Invoke Users by login (profil) Fetch API',
  props<{login:string}>()
);
/*
*  The action 'profilFetchAPISuccess' has been defined to be invoked after a successful API call.
*  This action method is responsible for storing the API response into the store.
* */
export const profilFetchAPISuccess = createAction(
  '[Profil API] Fetch API Success',
  props<{ profil: Profil  }>()
);
