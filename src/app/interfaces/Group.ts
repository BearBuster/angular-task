import {User} from "./User";
import {Function} from "./Function"

export interface Group {
  functions: Function[]
  groupName: string
  id: number
  minValue: string
  maxValue: string
  users: User[]
  warning?: string
}
