# Test Report
## Overview
Automated unit tests for the module were conducted using the Jest testing framework.

All unit tests for the text-checking modules have been executed successfully without any failures.

### Test Execution Details
| Module        | Tested           | Outcome  |
| ------------- |:-------------:| -----:|
| TextAverages      | Automated unit tests using Jest | Successful |
| TextCounter     | Automated unit tests using Jest      |   Successful |
| TextFrequency | Automated unit tests using Jest      |    Successful |
| TextInputValidator | Automated unit tests using Jest      |    Successful |
| TextManipulator | Automated unit tests using Jest      |    Successful |


## More information about the tests
#### TextAverages
Two different tests for counting the average word and senrence length.

| Function        | Outcome |
| ------------- |:-------------:| -----:|
|averageWordLength | Successful |
|averageSentenceLengt | Successful | 

#### TextCounter
Eight different tests for counting characters (with and without spaces), letters, words, sentences, paragraphs, vowels, and consonants: Successful


    | Function        | Outcome |
| ------------- |:-------------:| -----:|
|countCharactersIncSpaces | Successful |
|countCharactersExcSpaces | Successful | 
|countLetters | Successful | 
|countWords | Successful | 
|countSentences | Successful | 
|countParagraphs | Successful | 
|countVowels | Successful | 
|countConsonants | Successful | 

#### TextFrequency
Five different tests for determining the most used letters, words, symbols, numbers, and pronouns: Successful


    | Function        | Outcome |
| ------------- |:-------------:| -----:|
|mostUsedLetters | Successful |
|mostUsedWords | Successful | 
|mostUsedSymbols | Successful | 
|mostUsedNumbers | Successful | 
|mostUsedPronouns | Successful | 

#### TextInputValidator
Tests for input validation including length and content checks, removal of additional spaces, and retrieval of validated text: Successful



    | Function        | Outcome |
| ------------- |:-------------:| -----:|
|validateLength | Successful |
|validateInput | Successful | 
|removeAdditionalSpaces | Successful | 
|getValidatedText | Successful | 

#### TextManipulator
Nine tests for text manipulation functions like replacing words, symbols, and numbers, as well as reversing the entire text and reversing the order of sentences: Successful

    | Function        | Outcome |
| ------------- |:-------------:| -----:|
|replaceWord | Successful |
|replaceSymbol | Successful | 
|replaceNumber | Successful | 
|reverseText | Successful | 
|reverseSentences | Successful | 

## Conclusion
Test Status: All Passed

All tests for the modules passed successfully.
Continuous testing is recommended as more features or changes are introduced.

