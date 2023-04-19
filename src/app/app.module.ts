import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UsersModule} from "./feature-modules/users/users.module";
import {RouterModule, Routes} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {SharedModuleModule} from "./shared-module/shared-module.module";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'

  },
  {
    path: 'users', loadChildren: () =>
      import('./feature-modules/users/users.module').then((b) => b.UsersModule)
  },

];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    UsersModule,
    LayoutModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
