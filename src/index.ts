class Sorter {
  private _collection: number[]
  
  constructor (collection: number[]) {
    this._collection = collection
  }

  sort(): number[] {
    const { length } = this._collection
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length -i -1); j++) {
        if (this._collection[j] > this._collection[j +1]) {
          const leftHand = this._collection[j]
          this._collection[j] = this._collection[j + 1]
          this._collection[j + 1] = leftHand
        }
      }
    }
    return [ ...this._collection ]
  }
}

const sorter = new Sorter([ 10, 3, -5, 0])

console.log(sorter.sort())
