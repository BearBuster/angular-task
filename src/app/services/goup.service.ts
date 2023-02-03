import { Injectable } from '@angular/core';
import {IGroupe} from "../interfaces/igroupe";
import {groupListData} from "../data/GroupListData";

@Injectable({
  providedIn: 'root'
})
export class GoupService {

  constructor() { }

  getAllGroups(): IGroupe[]{
    return groupListData;
  }

  getGroupById(id: number): IGroupe | undefined{
    return groupListData.find(e => e.id === id)
  }
}
