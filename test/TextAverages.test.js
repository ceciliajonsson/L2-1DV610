import { TextAverages } from '../src/text-checkers/TextAverages'

describe("TextAverages", () => {
    describe("averageWordLength", () => {
        it("returns the average word length of a text", () => {
            let text = "The quick brown fox jumped over the lazy dog."
            let averageWordLength = TextAverages.averageWordLength(text)
            expect(averageWordLength).toEqual(4)
        })
    })

    describe("averageSentenceLength", () => {
        it("returns the average sentence length of a text", () => {
            let text = "The quick brown fox jumped over the lazy dog. The dog was not amused."
            let averageSentenceLength = TextAverages.averageSentenceLength(text)
            expect(averageSentenceLength).toEqual(7)
        })
    })
})

