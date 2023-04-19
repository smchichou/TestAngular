import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectCurrentPage} from "../../../core-module/store/breadcrumb/breadcrumb.selector";
import {Breadcrumb} from "../../../core-module/models/breadcrumb";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  // public
  public breadcrumb : Breadcrumb = {
    current : ''
  }
  /**
   * Constructor
   *
   * @param {Store} _store
   * */
constructor(private _store : Store) {
  this._store.select(selectCurrentPage).subscribe((data)=>{
    console.log("sdssf",data)
    this.breadcrumb = data
  })
}
}
