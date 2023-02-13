import {Component, OnInit} from '@angular/core';
import {Group} from "../../interfaces/Group";
import {ActivatedRoute} from "@angular/router";
import {GroupService} from "../../services/group.service";
import {UtilsService} from "../../services/utils.service";
import {Form, FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css', './custom-checkbox.scss']
})
export class CardOverviewComponent implements OnInit{

  filterPlace = 'Filtra...'
  group: Group
  form: FormGroup

  constructor(public activeRouter: ActivatedRoute, public groupService: GroupService, public utilsService: UtilsService, public formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.createForm()
    console.log(this.form.value)
  }

  createForm(){
  let groupId = Number(this.activeRouter.snapshot.paramMap.get('id'))
  let group = this.groupService.getGroupById(groupId)
    if(group){
      return this.formBuilder.group({
        functions: this.formBuilder.array(
          this.utilsService.fetchFunctions(group.functions)
            .map(fun => this.formBuilder.group(fun))
        ),
        groupName: group.groupName,
        id: group.id,
        maxValue: group.maxValue,
        minValue: group.minValue,
        users: this.formBuilder.array(
          this.utilsService.fetchUsers(group.users)
            .map(user => this.formBuilder.group(user))
        ),
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

  get functions(){
    return this.form.get("functions") as FormArray
  }

  get users(){
    return this.form.get("users") as FormArray
  }

  toggleFunctionInput(value: any){
    console.log(value)
  }

  submit() {
    console.log(this.form.value)
  }
}
