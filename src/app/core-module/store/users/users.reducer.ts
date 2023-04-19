import {User} from "../../models/user";
import {createReducer, on} from "@ngrx/store";
import {usersFetchAPISuccess} from "./users.action";
/*
* Empty array assigned as initial data of our store.
* */
export const initialState: ReadonlyArray<User> = [];
/*
*  Using 'createReducer' that loads from '@ngrx/store'
*  we created our 'userReducer' by sending 'initialState' as an input parameter.
* */
export const userReducer = createReducer(
  initialState,
  on(usersFetchAPISuccess, (state, { allUsers }) => {
    return allUsers;
  })
);
