import { Injectable } from '@angular/core';
import {GroupList} from "../data/GroupList";
import {FunctionList} from "../data/FunctionList";
import {Group} from "../interfaces/Group";
import {Function} from "../interfaces/Function";
import {User} from "../interfaces/User";
import {UserList} from "../data/UserList";


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groupList: Group[] = GroupList
  functionList: Function[] = FunctionList
  userList: User[] = UserList


  constructor() { }

  getAllGroups(): Group[]{
    return this.groupList;
  }

  getAllFunctions(): Function[]{
    return this.functionList
  }

  getAllUsers(): User[]{
    return this.userList
  }

  getGroupById(id: number): Group | undefined {
    return this.groupList.find(e => e.id === id)
  }

  removeGroupById(id: number) {
    this.groupList = this.groupList.filter(e=> e.id != id)
  }

  addGroupList(group: Group){
    console.log(group)
    this.groupList.push(group)
  }

}
