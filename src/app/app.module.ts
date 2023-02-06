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
import {FormsModule} from "@angular/forms";
import { GroupListFilterPipe } from './pipes/group-list-filter.pipe';
import { FunctionRowComponent } from './components/function-row/function-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardOverviewComponent,
    GroupListComponent,
    GroupListFilterPipe,
    FunctionRowComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule,
        RouterOutlet,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
