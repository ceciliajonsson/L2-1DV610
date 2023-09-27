export class TextInputValidator {
  constructor(text) {
    this.text = text
  }

    // ^ Does two things - Can be renamed to better vapture or Split it up to two methods
    // ^ Don't be cute - cute eller hunourous
  validateLength() {
    if (this.text.length === 0) {
      throw new Error("Input is empty!")
    }
    if (this.text.length > 1000) {
      throw new Error("Input is too long!")
    }    
  }
  // ^ Validate Charecthers better name - Not obvious what it does
  validateInput() {
    const validCharacters = /^[a-zA-Z0-9\s.!?,']+$/
    if (!validCharacters.test(this.text)) {
      throw new Error("Input contains invalid characters!")
    }
  }

  // ^ Replaces multiple spaces with a single space + Trim (removes spaces at the beginning and end of the string)
  removeAdditionalSpaces() {
    this.text = this.text.replace(/\s+/g, ' ').trim()
  }

  getValidatedText() {
    this.validateLength()
    this.validateInput()
    this.removeAdditionalSpaces()
    return this.text
  }
}
