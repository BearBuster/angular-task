import {Component, Input} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-overview-user-list',
  templateUrl: './card-overview-user-list.component.html',
  styleUrls: ['./card-overview-user-list.component.css']
})
export class CardOverviewUserListComponent {

  @Input() parentForm: FormGroup


  get users(){
    return this.parentForm.get("users") as FormArray
  }

}
