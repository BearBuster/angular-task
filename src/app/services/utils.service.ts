import { Injectable } from '@angular/core';
import { FunctionList } from "../data/FunctionList";
import { Function } from "../interfaces/Function";
import {User} from "../interfaces/User";
import {UserList} from "../data/UserList";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  functionList: Function[] = FunctionList
  userList: User[] = UserList
  constructor() { }

  fetchFunctions(functionList?: Function[]): Function[]{
    return this.functionList.map(fun => {
      if (functionList) {
        let currentFunction = functionList.find(curFun => {
          return curFun.code === fun.code
        })
        if(currentFunction){
          return {
            ...fun,
            minValue: currentFunction.minValue,
            maxValue: currentFunction.maxValue,
            checked: true
          } as Function
        }
      }
      return {
        ...fun,
        minValue: '',
        maxValue: '',
        checked: false
      } as Function
    })
  }

  fetchUsers(userList?: User[]): User[]{
    return this.userList.map(user => {
      if (userList) {
        let currentUser = userList.find(curUser => {
          return curUser.id == user.id
        })
        if (currentUser) {
          return {
            ...user,
            fullName: currentUser.fullName,
            userInitials: currentUser.userInitials,
            checked: true
          } as User
        }
      }
      return {
        ...user,
        checked: false
      } as User
    })
  }

}
