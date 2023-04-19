import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Follower} from "../../models/follower";
/*
* The 'createFeatureSelector' loads from the '@ngrx/store'.
* The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Follower' module).
* Here the name of our selector 'Followers' must be used to register the 'userReducer' into the 'users.module.ts'
* to register the feature store or child store.
* */
export const selectFollowers = createFeatureSelector<Follower[]>('Followers');

