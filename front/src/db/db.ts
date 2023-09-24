import Dexie, { Table } from 'dexie'
import { User } from '../models/user'

export class MySubClassedDixie extends Dexie {
  user!: Table<User>

  constructor() {
    super('newmedb')
    this.version(1).stores({
      user: '++id, name, email, password, type, tokenAccess'
    })
  }
}

export const db = new MySubClassedDixie()
