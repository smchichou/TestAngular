import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Profil} from "../../../core-module/models/profil";
import {selectUserById} from "../../../core-module/store/profil/profil.selector";
import {defaultProfil} from "../../../core-module/store/profil/profil.reducer";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {setCurrentPage} from "../../../core-module/store/breadcrumb/breadcrumb.action";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  // public
  public currentRoute : string = ''
  public profil$: Observable<Profil> = this._store.pipe(select(selectUserById));
  public profil: Profil = defaultProfil;

  /**
   * Constructor
   *
   * @param {Store} _store
   * @param {ActivatedRoute} _router
   * */
  constructor(
    private _store: Store,
    private _router : Router
    ) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url
      }
    });
  }
  /*
    * Dispatch an event to change the current page displayed in the breadcrumb.
    * */
  dispatchEvent(currentPage:string){
    this._store.dispatch(setCurrentPage({current:{current:currentPage}}))
  }
  ngOnInit(): void {
    this.profil$.subscribe((data: Profil) => {
      this.profil = data
    })
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
