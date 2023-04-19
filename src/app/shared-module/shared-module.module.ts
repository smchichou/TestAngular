import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {StoreModule} from "@ngrx/store";
import {BreadcrumbReducer} from "../core-module/store/breadcrumb/breadcrumb.reducer";



@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('currentPage', BreadcrumbReducer),
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class SharedModuleModule { }
