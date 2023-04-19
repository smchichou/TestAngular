import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {FollowersComponent} from "./components/followers/followers.component";
import {ReposComponent} from "./components/repos/repos.component";
import {DetailComponent} from "./components/repos/detail/detail.component";

const routes: Routes = [
  {path:'users',children:[
      {path: '',component: ListComponent},
      {path:':login',component:ProfilComponent},
      {path:':login/followers',component:FollowersComponent},
      {path:':login/repos',component:ReposComponent},
      {path:':login/repos/:repo_name',component:DetailComponent}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
