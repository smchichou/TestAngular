import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutRoutingModule} from "./layout-routing.module";
import {AppContentComponent} from "./components/app-content/app-content.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ContentComponent} from "./components/content/content.component";
import {SharedModuleModule} from "../shared-module/shared-module.module";



@NgModule({
  declarations: [
    AppContentComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent
  ],
    exports: [
        SidebarComponent,
        AppContentComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        SharedModuleModule
    ]
})
export class LayoutModule { }
