import { sortable } from './interface/sortable'

export class CharactersCollection implements sortable {
  constructor (public data: string) {}
  
  get length(): number {
    return this.data.length
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase()
      > this.data[rightIndex].toLowerCase()
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('')
    const leftHand = characters[leftIndex]
    const rightHand = characters[rightIndex]

    characters[leftIndex] = rightHand
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }
}