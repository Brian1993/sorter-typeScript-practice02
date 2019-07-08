import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([ 10, 3, -5, 0, 23])
const numberSorter = new Sorter(numbersCollection)

numberSorter.sort()
console.log('sorted data', numbersCollection.data)

const charactersCollection = new CharactersCollection('ANGODGDEGEgriej')
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()

console.log(charactersCollection.data)

