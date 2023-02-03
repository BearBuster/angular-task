import {Component, OnInit} from '@angular/core';
import {GoupService} from "../../services/goup.service";
import {IGroupe} from "../../interfaces/igroupe";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit{

  data: IGroupe[] = []

  constructor(public groupService: GoupService) {}

  ngOnInit(): void {
    this.data = this.groupService.getAllGroups()
  }

  deleteGroup(id: number){
    this.data = this.data.filter(e => e.id != id)
  }


}
