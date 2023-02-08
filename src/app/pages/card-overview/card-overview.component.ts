import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Group} from "../../interfaces/Group";
import {GroupService} from "../../services/group.service";
import {UtilsService} from "../../services/utils.service";

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css', './custom-checkbox.scss']
})
export class CardOverviewComponent implements OnInit{

  form: FormGroup

  constructor(public formBuilder: FormBuilder, public activeRouter: ActivatedRoute, public groupService: GroupService, public utilsService: UtilsService) {}

  ngOnInit(): void {
    this.form = this.createForm()
    console.log(this.form)
  }

  createForm(){
    let groupId = Number(this.activeRouter.snapshot.paramMap.get('id'))
    let group = this.groupService.getGroupById(groupId)
    if(group){
      return this.formBuilder.group({
        functions: new FormControl(this.utilsService.fetchFunctions(group.functions)),
        groupName: group.groupName,
        id: group.id,
        maxValue: group.maxValue,
        minValue: group.minValue,
        users: new FormControl(this.utilsService.fetchUsers(group.users)),
        warning: group.warning
      })
    }else {
      return this.formBuilder.group({
        functions: [],
        groupName: "",
        id: 0,
        maxValue: "",
        minValue: "",
        users: [],
        warning: ""
      })
    }
  }

}
