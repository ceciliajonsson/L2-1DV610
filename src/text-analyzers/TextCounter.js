export class TextCounter {

    static countCharacters(text) {
        let letters = text.split('')
        return letters.length
    }
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
}


  