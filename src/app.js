import { TextInputValidator } from './text-analyzers/TextInputValidator.js'
import { TextCounter } from './text-analyzers/TextCounter.js'

// & Change this so it is a process argv
const text = "Hello this, is a test!"
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

} catch (error) {
    console.error(error.message)
}

