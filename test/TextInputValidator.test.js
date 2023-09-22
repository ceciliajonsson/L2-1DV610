import { TextInputValidator } from "../src/text-analyzers/TextInputValidator"

describe('TextInputValidator', () => {
  it('should validate length and content, remove additional spaces and return validated text', () => {
    expect(() => new TextInputValidator('').validateLength()).toThrow('Input is empty!')
    expect(() => new TextInputValidator('a'.repeat(1001)).validateLength()).toThrow('Input is too long!')
    expect(() => new TextInputValidator('Invalid $').validateInput()).toThrow('Input contains invalid characters!')
    
    const validInput = '  Valid   input 123!?,  '
    const textInput = new TextInputValidator(validInput)
    textInput.removeAdditionalSpaces()
    expect(textInput.text).toBe('Valid input 123!?,')
    expect(() => textInput.validateLength()).not.toThrow()
    expect(() => textInput.validateInput()).not.toThrow()
    expect(textInput.getValidatedText()).toBe('Valid input 123!?,')
  })
})
