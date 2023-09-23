import { TextInputValidator } from './text-checkers/TextInputValidator.js'
import { TextCounter } from './text-checkers/TextCounter.js'
import { TextAverages } from './text-checkers/TextAverages.js'
import { TextFrequency } from './text-checkers/TextFrequency.js'
import { TextManipulator } from './text-checkers/TextManipulator.js'

const defaultText = "Hello there, John! It's amazing to see you for the 3rd times! Wow, our 2023 is coming to an end... isn't it amazing, John?!"
const text = process.argv[2] || defaultText
const validateText = new TextInputValidator(text)

try {
    const validatedText = validateText.getValidatedText()

    console.log("Validated Text:", validatedText)
    console.log(" ")
    console.log("----- Text Character Count -----")
    console.log("Characters Count Inc. Spaces:", TextCounter.countCharactersIncSpaces(validatedText))
    console.log("Characters Count Exc. Spaces:", TextCounter.countCharactersExcSpaces(validatedText))
    console.log("Letter Count:", TextCounter.countLetters(validatedText))
    console.log("Word Count:", TextCounter.countWords(validatedText))
    console.log("Sentence Count:", TextCounter.countSentences(validatedText))
    console.log("Paragraph Count:", TextCounter.countParagraphs(validatedText))
    console.log("Vowel Count:", TextCounter.countVowels(validatedText))
    console.log("Consonant Count:", TextCounter.countConsonants(validatedText))
    console.log(" ")
    console.log("----- Text Averages -----")
    console.log("Average Word Length:", TextAverages.averageWordLength(validatedText))
    console.log("Average Sentence Length:", TextAverages.averageSentenceLength(validatedText))
    console.log(" ")
    console.log("----- Text Frequency -----")
    console.log("Most Used Letters:", TextFrequency.mostUsedLetters(validatedText))
    console.log("Most Used Words:", TextFrequency.mostUsedWords(validatedText))
    console.log("Most Used Symbols:", TextFrequency.mostUsedSymbols(validatedText))
    console.log("Most Used Numbers:", TextFrequency.mostUsedNumbers(validatedText))
    console.log("Most Used Pronouns:", TextFrequency.mostUsedPronouns(validatedText))
    console.log(" ")
    console.log("----- Text Manipulation -----")
    console.log("Replace Word:", TextManipulator.replaceWord(validatedText, "amazing", "great"))
    console.log("Replace Symbol:", TextManipulator.replaceSymbol(validatedText, "!", "?"))
    console.log("Replace Number:", TextManipulator.replaceNumber(validatedText, 3, 23))
    console.log("Reverse Text:", TextManipulator.reverseText(validatedText))
    console.log("Reverse Sentences:", TextManipulator.reverseSentences(validatedText))

    

} catch (error) {
    console.error(error.message)
}
