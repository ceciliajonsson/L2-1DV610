import { TextInputValidator } from './text-analyzers/TextInputValidator.js'
import { TextCounter } from './text-analyzers/TextCounter.js'
import { TextAverages } from './text-analyzers/TextAverages.js'

// & Change this so it is a process argv
const text = "Hello there! Hello. Hi."
const validateText = new TextInputValidator(text)

try {
    const validatedText = validateText.getValidatedText();

    console.log("Validated Text:", validatedText);
    console.log(" ")
    console.log("----- Text Character Count -----")
    console.log("Characters Count:", TextCounter.countCharacters(validatedText));
    console.log("Letter Count:", TextCounter.countLetters(validatedText));
    console.log("Word Count:", TextCounter.countWords(validatedText));
    console.log("Sentence Count:", TextCounter.countSentences(validatedText));
    console.log(" ")
    console.log("----- Text Averages -----")
    console.log("Average Word Length:", TextAverages.averageWordLength(validatedText));
    console.log("Average Sentence Length:", TextAverages.averageSentenceLength(validatedText));
    console.log(" ")

} catch (error) {
    console.error(error.message)
}

