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
    static countParagraphs(text) {
        let paragraphs = text.split(/\n/)
        return paragraphs.length
    }
    static countVowels(text) {
        let vowels = text.match(/[aeiouåäö]/gi)
        return vowels.length
    }

    static countConsonants(text) {
        let consonants = text.match(/[bcdfghjklmnpqrstvwxz]/gi)
        return consonants.length
    }
    
}


  