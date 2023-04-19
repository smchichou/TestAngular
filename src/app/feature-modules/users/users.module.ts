import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {ListComponent} from "./components/list/list.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {ReposComponent} from "./components/repos/repos.component";
import {FollowersComponent} from "./components/followers/followers.component";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {userReducer} from "../../core-module/store/users/users.reducer";
import {StoreModule} from "@ngrx/store";
import {UsersEffect} from "../../core-module/store/users/users.effect";
import {EffectsModule} from "@ngrx/effects";
import {profilReducer} from "../../core-module/store/profil/profil.reducer";
import {ProfilEffect} from "../../core-module/store/profil/profil.effect";
import {followerReducer} from "../../core-module/store/followers/followers.reducer";
import {FollowersEffect} from "../../core-module/store/followers/followers.effect";
import {repoReducer, reposReducer} from "../../core-module/store/repos/repos.reducer";
import {ReposEffect} from "../../core-module/store/repos/repos.effect";
import {MatIconModule} from "@angular/material/icon";
import {DetailComponent} from "./components/repos/detail/detail.component";
import {SharedModuleModule} from "../../shared-module/shared-module.module";



@NgModule({
  declarations: [
    ListComponent,
    ProfilComponent,
    ReposComponent,
    FollowersComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModuleModule,
    MatButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('AllUsers', userReducer),
    EffectsModule.forFeature([UsersEffect]),
    StoreModule.forFeature('profil', profilReducer),
    EffectsModule.forFeature([ProfilEffect]),
    StoreModule.forFeature('Followers', followerReducer),
    EffectsModule.forFeature([FollowersEffect]),
    StoreModule.forFeature('Repos', reposReducer),
    StoreModule.forFeature('Repo', repoReducer),
    EffectsModule.forFeature([ReposEffect]),
    MatIconModule,


  ]
})
export class UsersModule { }
