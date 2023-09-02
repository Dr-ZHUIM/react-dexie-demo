import Dexie, { Table } from 'dexie';

export class MySubClassDexie extends Dexie {
    friends!: Table<Friend>;

    constructor(){
      super('subClass-db-demo');
      this.version(1).stores({
        friends: '++id, name, age'
      });
    }
}

export const db = new MySubClassDexie();
