import { TextInputValidator } from './text-analyzers/TextInputValidator.js';

const text = "Hello this, is a test!";
const validateText = new TextInputValidator(text)

try {
    console.log(validateText.getValidatedText())
} catch (error) {
    console.error(error.message)
}
