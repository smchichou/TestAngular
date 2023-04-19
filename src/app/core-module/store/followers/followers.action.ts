import {createAction, props} from "@ngrx/store";
import {Follower} from "../../models/follower";
/*
* An action called 'invokeFollowersAPI' has been defined, which will trigger the invocation of an API call.
* */
export const invokeFollowersAPI = createAction(
  '[Followers API] Invoke Followers Fetch API',
  props<{login:string}>()

);
/*
*  The action 'followersFetchAPISuccess' has been defined to be invoked after a successful API call.
*  This action method is responsible for storing the API response into the store.
* */
export const followersFetchAPISuccess = createAction(
  '[Followers API] Fetch API Success',
  props<{ followers: Follower[] }>()
);
