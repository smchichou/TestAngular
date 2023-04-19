import {Component} from '@angular/core';
import {Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {Repo} from "../../../../../core-module/models/repo";
import {selectRepo} from "../../../../../core-module/store/repos/repos.selector";
import {invokeRepoAPI} from "../../../../../core-module/store/repos/repos.action";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  // public
  public repo: Repo | undefined;
  public repo_name: string = '';
  public login: string = '';
  public nbrPulls: number = 0;
  public nbrIssues: number = 0;
  public nbrCommits: number = 0;
  //private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {Store} _store
   * @param {ActivatedRoute} _route
   * @param {Router} _router
   * */
  constructor(
    private _store: Store,
    private _route: ActivatedRoute,
    private _router: Router,

  ) {
    this._route.params.subscribe(params => {
      this.login = params['login'];
      this.repo_name = params['repo_name'];
      this.getRepo(this.login,this.repo_name)
    })
    this._unsubscribeAll = new Subject()

  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get repo of user by name
   *
   */
  getRepo(login:string,repo_name:string) {
    this._store.dispatch(invokeRepoAPI({login,repo_name}))
    let fetchData$  = this._store.pipe(select(selectRepo));
    fetchData$.subscribe((data) => {
      if (data) {
        this.repo = { ...data };
        console.log("ddddd",data)
      }
      else{
        this._router.navigate(['/users']);
      }
    });


  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(true)
    this._unsubscribeAll.complete();
  }

}
