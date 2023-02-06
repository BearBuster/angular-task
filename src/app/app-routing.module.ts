import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardOverviewComponent} from "./pages/card-overview/card-overview.component";
import {CardListComponent} from "./pages/card-list/card-list.component";
import {GroupListComponent} from "./pages/group-list/group-list.component";


const routes: Routes = [
  {path: '', component: GroupListComponent},
  {path: 'card-overview/:id', component: CardOverviewComponent},
  {path: 'card-overview', component: CardOverviewComponent},
  {path: '**', component: CardListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
