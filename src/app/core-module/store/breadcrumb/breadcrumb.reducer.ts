import {Breadcrumb} from "../../models/breadcrumb";
import {createReducer, on} from "@ngrx/store";
import {setCurrentPage} from "./breadcrumb.action";

export const initialState: Readonly<Breadcrumb> = {
  current: '',
};

export const BreadcrumbReducer = createReducer(
  initialState,
  on(setCurrentPage, (state, { current }) => {
    return {
      ... current,
    };
  })
);
