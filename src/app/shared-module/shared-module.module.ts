import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {StoreModule} from "@ngrx/store";
import {BreadcrumbReducer} from "../core-module/store/breadcrumb/breadcrumb.reducer";
import { PieComponent } from './components/charts/pie/pie.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { BasicComponent } from './components/charts/line-charts/basic/basic.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    PieComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    StoreModule.forFeature('currentPage', BreadcrumbReducer),
  ],
  exports:[
    BreadcrumbComponent,
    PieComponent,
    BasicComponent
  ]
})
export class SharedModuleModule { }
