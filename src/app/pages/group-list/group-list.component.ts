import {Component} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent{
  filterString: string = ''

  constructor(public groupService: GroupService, public router: Router) {}
}
