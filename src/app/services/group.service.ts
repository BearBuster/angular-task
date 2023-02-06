import { Injectable } from '@angular/core';
import {functionDetails, IGroupe, userDetails} from "../interfaces/igroupe";
import {groupListData} from "../data/GroupListData";
import {IFunction} from "../interfaces/IFunction";
import {functions} from "src/app/data/FunctionsData"
import {IUser} from "../interfaces/IUser";
import {UsersData} from "../data/UsersData"

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupList: IGroupe[] = groupListData
  tmpGroup: IGroupe

  constructor() { }

  getAllGroups(): IGroupe[]{
    return this.groupList;
  }

  getAllFunctions(): IFunction[]{
    return functions
  }

  getAllUsers(): IUser[]{
    return UsersData
  }

  getGroupById(id: number): IGroupe | undefined{
    return this.groupList.find(e => e.id === id)
  }

  resetTmpGroup(){
    let functionDetailsList: functionDetails[] = functions.map(e => {
      return {
        title: e.function_name,
        functionCode: e.function_code,
        minValue: '',
        maxValue: ''
      }
    })

    let userDetailsList: userDetails[] = UsersData.map(e => {
      return {
        userId: e.userId,
        userInitials: '',
        fullName: e.fullName,
      }
    })

    this.tmpGroup = {
      functions: functionDetailsList,
      groupName: "",
      id: 0,
      maxValue: "",
      minValue: "",
      users: userDetailsList
    }
  }

}
