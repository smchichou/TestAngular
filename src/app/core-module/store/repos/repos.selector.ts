import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Repo} from "../../models/repo";
/*
* The 'createFeatureSelector' loads from the '@ngrx/store'.
* The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Repo' module).
* Here the name of our selector 'Repos' must be used to register the 'reposReducer' into the 'users.module.ts'
* to register the feature store or child store.
* */
export const selectRepos = createFeatureSelector<Repo[]>('Repos');
export const selectRepo = createFeatureSelector<Repo>('Repo');



