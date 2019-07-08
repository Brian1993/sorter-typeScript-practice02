import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  data: number[]
  get length(): number {
    return this.data.length
  }

  constructor(data: number[]) {
    super()
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