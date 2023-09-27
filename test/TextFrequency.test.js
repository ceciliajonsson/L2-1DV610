import { TextFrequency } from "../src/text-analyzers/TextFrequency"

describe('TextFrequency', () => {
  const sampleText = "3 quick brown foxes jumped over 1 lazy dog. They were quick! The 3 foxes then went home."

it('should correctly find the most used letters', () => {
  const result = TextFrequency.mostUsedLetters(sampleText, 5)
  expect(result).toEqual([["e", 11], ["o", 6], ["t", 4], ["h", 4], ["c", 5]])
})

it('should correctly find the most used words', () => {
  const result = TextFrequency.mostUsedWords(sampleText)
  expect(result).toEqual([["quick", 2], ["foxes", 2], ["brown", 1], ["jumped", 1], ["over", 1]])
})

it('should correctly find the most used symbols', () => {
  const result = TextFrequency.mostUsedSymbols(sampleText)
  expect(result).toEqual([[".", 2], ["!", 1]])
})

it('should correctly find the most used numbers', () => {
  const result = TextFrequency.mostUsedNumbers(sampleText)
  expect(result).toEqual([["3", 2], ["1", 1]])
})

  it('should correctly find the most used pronouns', () => {
    const result = TextFrequency.mostUsedPronouns(sampleText)
    expect(result).toEqual([["they", 1]])
  })
})
