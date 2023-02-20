import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardOverviewComponent } from './pages/card-overview/card-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { GroupListComponent } from './pages/group-list/group-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GroupListFilterPipe } from './pipes/group-list-filter.pipe';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { ToggleSliderComponent } from './components/toggle-slider/toggle-slider.component';
import { TruncatePipesModule } from "angular-truncate-pipes";
import { UserCheckboxComponent } from './components/user-checkbox/user-checkbox.component';
import { UserFormFilterPipe } from './pipes/user-form-filter.pipe';
import { NgIconsModuleModule } from "./modules/ng-icons-module/ng-icons-module.module";
import { UserCircleListComponent } from './components/user-circle-list/user-circle-list.component';
import { GroupListSortPipe } from './pipes/group-list-sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardOverviewComponent,
    GroupListComponent,
    GroupListFilterPipe,
    GroupCardComponent,
    MyInputComponent,
    ToggleSliderComponent,
    UserCheckboxComponent,
    UserFormFilterPipe,
    UserCircleListComponent,
    GroupListSortPipe
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule,
        RouterOutlet,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TruncatePipesModule,
        NgIconsModuleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
