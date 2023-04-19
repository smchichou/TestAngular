import {Component, Input, OnInit} from '@angular/core';
import {setCurrentPage} from "../../../core-module/store/breadcrumb/breadcrumb.action";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: string[] | undefined;
  /**
   * Constructor
   *
   * @param {Store} _store
   * */
  constructor(private _store : Store) { }
  /*
   * Dispatch an event to change the current page displayed in the breadcrumb.
   * */
  dispatchEvent(currentPage:string){
    this._store.dispatch(setCurrentPage({current:{current:currentPage}}))
  }
  ngOnInit(): void {
  }

}
