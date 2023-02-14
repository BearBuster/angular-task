import { NgModule } from '@angular/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { heroCreditCard } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  imports: [
    NgIconsModule.withIcons({
      heroUsers,
      heroCreditCard
    })
  ],
  exports: [
    NgIconsModule
  ]
})
export class NgIconsModuleModule { }
