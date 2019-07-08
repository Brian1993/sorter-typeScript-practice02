import { sortable } from './interface/sortable'

export class NumbersCollection implements sortable {
  data: number[]
  get length(): number {
    return this.data.length
  }

  constructor(data: number[]) {
    this.data = data
  }

  compare (leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap (leftIndex: number, rightIndex: number) {
    const leftHand = this.data[leftIndex]
    const rightHand = this.data[rightIndex]
    this.data[leftIndex] = rightHand
    this.data[rightIndex] = leftHand
  }
}