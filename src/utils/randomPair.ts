

export function randomPair(array: Array<string>): Array<string> {
  
  const checkArray: Array<string[]>= []
  let firstIndex = Math.random()*array.length
  const secondIndex = Math.random()*array.length
  let firstPerson = array.slice(firstIndex, firstIndex+1)[0]
  const secondPerson = array.slice(secondIndex, secondIndex+1)[0]
  while (firstPerson === secondPerson){
    firstIndex = Math.random()*array.length
    firstPerson = array.slice(firstIndex, firstIndex+1)[0]
  }
  let pair = [firstPerson, secondPerson]
  if (firstPerson !== secondPerson && checkArray.includes(pair)=== false){
    array.splice(array.indexOf(firstPerson), 1)
    array.splice(array.indexOf(secondPerson), 1)
  } else {
    pair = randomPair(array)
  }

 
  return pair
}

// Random Pair
// const testPair = randomPair(names)
// const pair = pairs.includes(testPair)? randomPair(names): testPair

// let firstIndex = Math.random()*names.length
// const secondIndex = Math.random()*names.length
// let firstPerson = names.slice(firstIndex, firstIndex+1)[0]
// const secondPerson = names.slice(secondIndex, secondIndex+1)[0]
// while (firstPerson === secondPerson){
//     firstIndex = Math.random()*names.length
//     firstPerson = names.slice(firstIndex, firstIndex+1)[0]
// }
// let pair = [firstPerson, secondPerson]
// if (firstPerson !== secondPerson && pairs.includes(pair) === false){
//   names.splice(names.indexOf(firstPerson), 1)
//   names.splice(names.indexOf(secondPerson), 1)
    // }