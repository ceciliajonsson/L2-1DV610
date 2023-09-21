export class TextCounter {

    static countCharactersIncSpaces(text) {
        let letters = text.split('')
        return letters.length
    }
    static countCharactersExcSpaces(text) {
        let letters = text.split('')
        let count = 0;
        for (let letter of letters) {
            if (letter.match(/^[a-zA-Z0-9.!?,']/)) {
                count++
            }
        }
        return count;
    }

    // ^ Confusing wording - do we mean how many Letters are present or Each letter?
    // ^ We mean each letter but the wording is confusing
    static countLetters(text) {
        let letters = text.split('')
        let count = 0
        for (let letter of letters) {
            if (letter.match(/[a-zA-Z]/)) {
                count++
            }
        }
        return count
    }
    static countWords(text) {
        return text.split(' ').length
    }
    static countSentences(text) {
        let sentences = text.split(/[.!?]/)
        return sentences.length 
    }
    static countParagraphs(text) {
        let paragraphs = text.split(/\n/)
        return paragraphs.length
    }
    static countVowels(text) {
        let vowels = text.match(/[aeiou]/gi)
        return vowels ? vowels.length : 0
    }

    static countConsonants(text) {
        let consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
        return consonants ? consonants.length : 0
}

    
}
