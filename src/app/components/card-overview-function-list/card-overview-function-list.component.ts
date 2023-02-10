import {Component, Input, OnInit, SkipSelf} from '@angular/core';
import {FormBuilder, ControlContainer, FormArray} from '@angular/forms'

@Component({
  selector: 'app-card-overview-function-list',
  templateUrl: './card-overview-function-list.component.html',
  styleUrls: ['./card-overview-function-list.component.css']
})
export class CardOverviewFunctionListComponent implements OnInit{
  @Input() public groupName: string;
  constructor(@SkipSelf() public group: ControlContainer) {


  }

  ngOnInit(): void {
    console.log(this.group.control?.get(this.groupName))
  }

  // get functions(){
  //   return 1
  //   // return this.group.control?.get(this.groupName)?.get("functions") as FormArray
  // }


}
