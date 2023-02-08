import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {Router} from "@angular/router";
import {Group} from "../../interfaces/Group";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{
  filterString: string = ''

  constructor(public groupService: GroupService, public router: Router) {}

  ngOnInit(): void {}
}
