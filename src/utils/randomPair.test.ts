import { randomPair } from "./randomPair";

test("creates a random pair from an array of strings, with an even number of items and length greater than 2", () => {
  expect(randomPair(["World", "hi", "yo", "hello"])).toEqual(
    ["World","hello"]||["World", "hi"]||["World", "yo"]||["hi", "yo"]||
  ["hi", "hello"]||["hi", "World"]||["hello", "yo"]||["hello", "hi"]||["hello", "World"])
});