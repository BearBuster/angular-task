import {Attribute, Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-overview-main-info',
  templateUrl: './card-overview-main-info.component.html',
  styleUrls: ['./card-overview-main-info.component.css']
})
export class CardOverviewMainInfoComponent implements OnInit{

  constructor(public controlContainer: ControlContainer) {}
  ngOnInit(): void {}

}
