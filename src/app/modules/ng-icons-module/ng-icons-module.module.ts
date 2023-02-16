import { NgModule } from '@angular/core';
import {
  heroUsers,
  heroCreditCard,
  heroExclamationTriangle
} from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  imports: [
    NgIconsModule.withIcons({
      heroUsers,
      heroCreditCard,
      heroExclamationTriangle
    })
  ],
  exports: [
    NgIconsModule
  ]
})
export class NgIconsModuleModule { }
