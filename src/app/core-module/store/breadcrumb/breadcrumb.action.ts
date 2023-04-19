import {createAction, props} from "@ngrx/store";
import {Breadcrumb} from "../../models/breadcrumb";


export const setCurrentPage = createAction(
  '[Current page] current page',
  props<{current: Breadcrumb}>()
);
