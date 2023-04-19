import {createFeatureSelector} from "@ngrx/store";
import {Breadcrumb} from "../../models/breadcrumb";

export const selectCurrentPage = createFeatureSelector<Breadcrumb>('currentPage');
