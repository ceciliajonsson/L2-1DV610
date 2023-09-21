import { TextCounter } from "../src/text-analyzers/TextCounter"

describe('TextCounter', () => {

    const sampleText = "The quick brown fox jumped over the lazy dog.";

    test('countCharactersIncSpaces', () => {
        expect(TextCounter.countCharactersIncSpaces(sampleText)).toBe(45);
    });

    test('countCharactersExcSpaces', () => { 
        expect(TextCounter.countCharactersExcSpaces(sampleText)).toBe(37);
    });

    test('countLetters', () => {
        expect(TextCounter.countLetters(sampleText)).toBe(36);
    });

    test('countWords', () => {
        expect(TextCounter.countWords(sampleText)).toBe(9);
    });

    test('countSentences', () => {
        expect(TextCounter.countSentences(sampleText)).toBe(2); // Includes trailing full stop
    });

    test('countParagraphs', () => {
        expect(TextCounter.countParagraphs(sampleText)).toBe(1);
    });

    test('countVowels', () => { 
        expect(TextCounter.countVowels(sampleText)).toBe(12);
    });

    test('countConsonants', () => {
        expect(TextCounter.countConsonants(sampleText)).toBe(24);
    });

});
