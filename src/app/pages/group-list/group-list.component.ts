import {Component, OnInit} from '@angular/core';
import {GroupService} from "../../services/group.service";
import {IGroupe} from "../../interfaces/igroupe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  data: IGroupe[] = []
  filterString: string = ''

  constructor(public groupService: GroupService, public router: Router) {}

  ngOnInit(): void {
    this.data = this.groupService.getAllGroups()
  }

  deleteGroup(id: number){
    this.data = this.data.filter(e => e.id != id)
  }


}
