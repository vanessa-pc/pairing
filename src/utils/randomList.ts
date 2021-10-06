import { randomPair } from "./randomPair";

export function randomList(array: Array<string>): Array<string[]> {
  
  const list = new Array<string[]>()

  while (array.length >= 2){
    const pair = randomPair(array)
    console.log(pair)
      list.push(pair);
      console.log(list)
    }
  return list
}