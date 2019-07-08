import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'


const numbersCollection = new NumbersCollection([ 10, 3, -5, 0, 23])
numbersCollection.sort()
console.log('sorted data', numbersCollection.data)

const charactersCollection = new CharactersCollection('ANGODGDEGEgriej')
charactersCollection.sort()
console.log(charactersCollection.data)

