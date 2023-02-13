import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { CardOverviewComponent } from './pages/card-overview/card-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./modules/material/material.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { GroupListComponent } from './pages/group-list/group-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GroupListFilterPipe } from './pipes/group-list-filter.pipe';
import { FunctionRowComponent } from './components/function-row/function-row.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { CardOverviewMainInfoComponent } from './components/card-overview-main-info/card-overview-main-info.component';
import { CardOverviewFunctionListComponent } from './components/card-overview-function-list/card-overview-function-list.component';
import { CardOverviewUserListComponent } from './components/card-overview-user-list/card-overview-user-list.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { ToggleSliderComponent } from './components/toggle-slider/toggle-slider.component';
import {TruncatePipesModule} from "angular-truncate-pipes";
import { UserCheckboxComponent } from './components/user-checkbox/user-checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardOverviewComponent,
    GroupListComponent,
    GroupListFilterPipe,
    FunctionRowComponent,
    GroupCardComponent,
    CardOverviewMainInfoComponent,
    CardOverviewFunctionListComponent,
    CardOverviewUserListComponent,
    MyInputComponent,
    ToggleSliderComponent,
    UserCheckboxComponent
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
        TruncatePipesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
