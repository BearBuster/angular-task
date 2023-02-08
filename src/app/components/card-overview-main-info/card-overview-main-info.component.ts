import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-overview-main-info',
  templateUrl: './card-overview-main-info.component.html',
  styleUrls: ['./card-overview-main-info.component.css']
})
export class CardOverviewMainInfoComponent implements OnInit{

  @Input() formGroup: FormGroup
  qwe: string

  ngOnInit(): void {
    // console.log(this.formGroup.value.groupName = "Dimass")
    // console.log(this.formGroup.value)
    this.qwe = this.formGroup.value.minValue
  }

  ss(){
    console.log(this.qwe)
  }

}
