export class TextManipulator {

    // ^ Multiple arguments - Not good to have multiple arguments  
    static replaceWord(text, wordToReplace, wordToReplaceWith) {
        // Check if the provided arguments are strings
        if (typeof text !== 'string' || typeof wordToReplace !== 'string' || typeof wordToReplaceWith !== 'string') {
            throw new TypeError("All arguments must be of type string.")
        }

        // Check if the wordToReplace and wordToReplaceWith are non-empty strings
        if (wordToReplace.length === 0 || wordToReplaceWith.length === 0) {
            throw new Error("Both wordToReplace and wordToReplaceWith must be non-empty strings.")
        }
        return text.replace(new RegExp('\\b' + wordToReplace + '\\b', 'gi'), wordToReplaceWith)

    }
    // ^ Multiple arguments - Not good to have multiple arguments  
     static replaceSymbol(text, symbolToReplace, symbolToReplaceWith) {
        const allowedSymbols = ['.', ',', '!', '?', "'"]
        
        if (!allowedSymbols.includes(symbolToReplace)) {
            throw new Error(`Invalid symbol: ${symbolToReplace}. Allowed symbols are: ${allowedSymbols.join(', ')}`)
        }

        return text.replace(new RegExp('\\' + symbolToReplace, 'g'), symbolToReplaceWith)
    }

    // ^ Multiple arguments - Not good to have multiple arguments  
    static replaceNumber(text, numberToReplace, numberToReplaceWith) {
        if (typeof numberToReplace !== 'number' || typeof numberToReplaceWith !== 'number') {
            throw new TypeError("Both arguments must be of type number.")
        }

        return text.replace(new RegExp(numberToReplace, 'g'), numberToReplaceWith)
    }

    static reverseText(text) {
        return text.split('').reverse().join('')
    }

    static reverseSentences(text) {

        let sentences = text.match(/[^.!?]+[.!?]/g) || []
        sentences = sentences.reverse()

        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].replace(' ,', ',')

            // Capitalize first letter of each sentence, except the last one (which was the original first sentence)
            if (i < sentences.length - 1) {
                sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1)
            }
      }  
        let reversedSentences = sentences.join(' ').trim();
        return reversedSentences.charAt(0).toUpperCase() + reversedSentences.slice(1)
}

}