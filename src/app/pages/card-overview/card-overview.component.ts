import {Component, OnInit} from '@angular/core';
import {IFunction} from "../../interfaces/IFunction";
import {functions} from "src/app/data/FunctionsData"
import {functionDetails, IGroupe} from "../../interfaces/igroupe";
import {GroupService} from "../../services/group.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces/IUser";
import {UsersData} from "../../data/UsersData";

@Component({
  selector: 'app-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css']
})
export class CardOverviewComponent implements OnInit{

  functionList: IFunction[] = []
  usersList: IUser[] = []
  groupDetails: IGroupe;
  constructor(private groupService: GroupService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.functionList = this.groupService.getAllFunctions();
    this.usersList = this.groupService.getAllUsers();
    let urlParamId = this.router.snapshot.paramMap.get('id')
    if (urlParamId){
      this.groupDetails = this.groupService.getGroupById(Number(urlParamId))
    }else {
      this.groupDetails = {
        functions: [],
        groupName: "",
        id: 0,
        maxValue: "",
        minValue: "",
        users: []
      }
    }
    console.log(this.groupDetails)
    console.log(urlParamId)
  }

  qwe(){
    console.log(this.groupDetails.functions)
  }
  existInListOfGroupFunctions(function_let: IFunction): functionDetails{
    let tmp = this.groupDetails.functions.find(e=>{
      return e.functionCode == function_let.function_code
    })
    if(tmp){
      return tmp
    }
    return  {
      title: function_let.function_name,
      functionCode: function_let.function_code,
      minValue: '',
      maxValue: ''
    }
  }

}
