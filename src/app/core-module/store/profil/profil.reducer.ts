import {createReducer, on} from "@ngrx/store";
import {profilFetchAPISuccess} from "./profil.action";
import {Profil} from "../../models/profil";

export const defaultProfil: Profil = {
  login: '',
};
export const initialState: Readonly<Profil> = {
  ...defaultProfil
}
/*
*  Using 'createReducer' that loads from '@ngrx/store'
*  we created our 'userReducer' by sending 'initialState' as an input parameter.
* */
export const profilReducer = createReducer(
  initialState,
  on(profilFetchAPISuccess, (state, { profil }) => {
    return profil;
  })
);
