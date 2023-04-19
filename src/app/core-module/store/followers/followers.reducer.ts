import {createReducer, on} from "@ngrx/store";
import {followersFetchAPISuccess} from "./followers.action";
import {Follower} from "../../models/follower";
/*
* Empty array assigned as initial data of our store.
* */
export const initialState: ReadonlyArray<Follower> = [];
/*
*  Using 'createReducer' that loads from '@ngrx/store'
*  we created our 'followerReducer' by sending 'initialState' as an input parameter.
* */
export const followerReducer = createReducer(
  initialState,
  on(followersFetchAPISuccess, (state, { followers }) => {
    return followers;
  })
);
