import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardOverviewComponent} from "./pages/card-overview/card-overview.component";
import {GroupListComponent} from "./pages/group-list/group-list.component";


const routes: Routes = [
  {path: 'gruppi-di-firma', title: 'Gruppi di firma', children: [
    {path: '', title: 'Gruppi di firma', component: GroupListComponent},
    {path: 'gruppo-di-firma-per-desposizioni', title: 'Gruppo di firma per desposizioni', component: CardOverviewComponent}
  ]},
  {path: '**', redirectTo: 'gruppi-di-firma' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
