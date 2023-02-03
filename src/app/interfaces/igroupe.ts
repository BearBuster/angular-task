export interface IGroupe {
  functions: functionDetails[]
  groupName: string
  id: number
  minValue: string
  maxValue: string
  users: userDetails[]
  warning?: string
}

export interface functionDetails {
  title: string
  functionCode: string
  minValue: string
  maxValue: string
}

export interface userDetails {
  userId: string
  userInitials: string
  fullName: string
}
