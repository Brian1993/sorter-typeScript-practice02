import { NumbersCollection } from './NumbersCollection'
import { sortable } from './interface/sortable'

export class Sorter {
  private _collection: sortable
  
  constructor (collection: sortable) {
    this._collection = collection
  }

  sort(): void {
    const { length } = this._collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length -i -1); j++) {
        if (this._collection.compare(j, j+1)) {
          this._collection.swap(j, j+1)
        }
      }
    }
  }
}
