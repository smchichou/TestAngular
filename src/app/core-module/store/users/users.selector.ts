import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from "../../models/user";
/*
* The 'createFeatureSelector' loads from the '@ngrx/store'.
* The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'User' module).
* Here the name of our selector 'AllUsers' must be used to register the 'userReducer' into the 'users.module.ts'
* to register the feature store or child store.
* */
export const selectUsers = createFeatureSelector<User[]>('AllUsers');

