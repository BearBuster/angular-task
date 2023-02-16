import {Component, OnInit} from '@angular/core';
import {Group} from "../../interfaces/Group";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../../services/group.service";
import {UtilsService} from "../../services/utils.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Function} from "../../interfaces/Function"
import {User} from "../../interfaces/User";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css', './custom-checkbox.scss']
})
export class CardOverviewComponent implements OnInit{

  filterPlace = new FormControl()
  group: Group
  form: FormGroup

  constructor(
    public activeRouter: ActivatedRoute,
    public groupService: GroupService,
    public utilsService: UtilsService,
    public formBuilder: FormBuilder,
    public router: Router,
    private _snackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    this.form = this.createForm()
    if(this.activeRouter.snapshot.queryParams['disable'] == 'true'){
      this.form.disable()
    }
  }

  createForm(){
    let groupId = Number(this.activeRouter.snapshot.queryParams['id'])
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
        functions: this.formBuilder.array(
          this.utilsService.fetchFunctions()
            .map(fun => this.formBuilder.group(fun))
        ),
        groupName: "",
        id: 0,
        maxValue: "",
        minValue: "",
        users: this.formBuilder.array(
          this.utilsService.fetchUsers()
            .map(user => this.formBuilder.group(user))
        ),
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

  submit() {
    let values = this.form.value
    if(values.id){
      this.groupService.removeGroupById(values.id)
    }
    let warning = ''
    this.groupService.addGroupList({
      functions: values.functions.filter((e: any) => {
        if(e.checked && e.minValue && e.maxValue) {
          if(e.minValue != values.minValue){
            warning = `Il numero minimo`
          } else if(e.maxValue != values.maxValue){
            warning = `Il numero massimo `
          }
          return true
        }
        return false
      }).map((e: Function) => e),
      groupName: values.groupName,
      id: values.id ? values.id : Math.random(),
      maxValue: values.maxValue,
      minValue: values.minValue,
      users: values.users.filter((e: any) => e.checked).map((e: User)=> e),
      warning: warning
    })


    let snackBarConfig = new MatSnackBarConfig()
    snackBarConfig.duration = 500
    this._snackBar.open("Modified!",'', snackBarConfig)
    this.router.navigate(["gruppi-di-firma"])
  }
}
