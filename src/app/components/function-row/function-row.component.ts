import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {functionDetails} from "../../interfaces/igroupe";

@Component({
  selector: 'app-function-row',
  templateUrl: './function-row.component.html',
  styleUrls: ['./function-row.component.css']
})
export class FunctionRowComponent implements OnInit{

  @Input() functionDetails: functionDetails;
  isActive: boolean = false;

  ngOnInit(): void {}

}
