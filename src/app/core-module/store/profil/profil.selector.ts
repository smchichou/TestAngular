import {createFeatureSelector} from '@ngrx/store';
import {Profil} from "../../models/profil";

/*
* The 'createFeatureSelector' loads from the '@ngrx/store'.
* The 'createFeatureSelector' is used to fetch all the data from our feature module(eg: 'Profil' module).
* Here the name of our selector 'profil' must be used to register the 'profilReducer' into the 'users.module.ts'
* to register the feature store or child store.
* */
export const selectUserById = createFeatureSelector<Profil>('profil');


