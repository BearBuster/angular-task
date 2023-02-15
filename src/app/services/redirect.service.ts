import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {GroupFormService} from "./group-form.service";

@Injectable({
  providedIn: 'root'
})
export class RedirectService {

  groupLinkArr: string[] = ['gruppi-di-firma','gruppo-di-firma-per-desposizioni']
  constructor(private router: Router, private groupFormService: GroupFormService) { }

  groupForm(phase: string ,id?: number, event?: any){
    event.stopPropagation()
    switch (phase){
      case 'new':
        this.groupFormService.disabled = false
        this.router.navigate(this.groupLinkArr)
        break;
      case 'edit':
        console.log([...this.groupLinkArr, id])
        this.groupFormService.disabled = false
        this.router.navigate(['gruppi-di-firma','gruppo-di-firma-per-desposizioni', id])
        break;
      case 'read':
        this.groupFormService.disabled = true
        this.router.navigate([...this.groupLinkArr, id])
        break;
    }
  }

}
