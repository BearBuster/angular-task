import {Component, Input} from '@angular/core';
import {Group} from "../../interfaces/Group";
import {GroupService} from "../../services/group.service";
import {Router} from "@angular/router";
import {RedirectService} from "../../services/redirect.service";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {

  @Input() group: Group;

  constructor(public groupService: GroupService, public router: Router, public redirectService: RedirectService) {}

}
