import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";
/*
* An action called 'invokeUsersAPI' has been defined, which will trigger the invocation of an API call.
* */
export const invokeUsersAPI = createAction(
  '[Users API] Invoke Users Fetch API'
);
/*
*  The action 'usersFetchAPISuccess' has been defined to be invoked after a successful API call.
*  This action method is responsible for storing the API response into the store.
* */
export const usersFetchAPISuccess = createAction(
  '[Users API] Fetch API Success',
  props<{ allUsers: User[] }>()
);
