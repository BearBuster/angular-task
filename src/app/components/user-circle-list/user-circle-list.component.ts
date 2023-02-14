import {Component, Input} from '@angular/core';
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-user-circle-list',
  templateUrl: './user-circle-list.component.html',
  styleUrls: ['./user-circle-list.component.css']
})
export class UserCircleListComponent {

  @Input() users: User[] = []
  @Input() limit: number = 3

}
