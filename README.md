# TextChecker
Project: L2-1DV610

A comprehensive library for text processing, analytics and manipulation. 

This module can give you insights on character counts, averages, frequencies and even perform simple manipulations.

## Table of Contents
1. Features
2. Installation Guide
3. Usage & Code Examples
4. Dependencies
5. Test Report
6. Issues & Bug Reports
7. License
8. Contributing

## 1. Features
* Text Validation: Ensure that the input text meets certain criteria before processing.
* Text Analytics: Count characters, words, sentences, vowels, and much more.
* Text Averages: Get average word length, sentence length, etc.
* Text Frequency: Identify most used letters, words, symbols, numbers, and even pronouns.
* Text Manipulation: Replace words, symbols, numbers or even reverse text and sentences.

## 2. Installation Guide
Clone the repository.
```
git clone [https://github.com/ceciliajonsson/L2-1DV610]
```
Navigate to the project directory and install required dependencies.
```
cd text-checker-library
npm install
```
Run the script and add your text:
```
node src/app.js <your text here>
```

## Usage & Code Examples
After setting up the project, you can use our library as follows:

### 1. TextInputValidator
Validates the provided text for any inconsistencies or invalid characters.

```
const textSample = "Hello, World!"
const validateText = new TextInputValidator(textSample)
// Expected Output: Hello, World!

```


### 2. TextCounter
Counts various elements in the text, such as characters, words, and sentences.

```
const countText = "Hello there, John!"
console.log(TextCounter.countWords(countText))
// Expected Output: 3

```


### 3. TextAverages
Computes averages, like the average word length in a sentence.

```
const avgText = "Can you see her now?"
console.log(TextAverages.averageWordLengt(avgText))
// Expected Output: 3

```

### 4. TextFrequency
Identifies frequently occurring elements in the text, such as the most used words.

```
const frequencyText = "apple banana apple orange banana"
console.log(TextFrequency.mostUsedWords(frequencyText))
// Expected Output: [['apple', 2], ['banana', 2], ['orange', 1]]

```


### 5. TextManipulator
Modify and reshape your text content using various functions.

```
const manipulateText = "Hello, it is 2023!"
console.log(TextManipulator.replaceNumber(manipulateText, 2023, 2024))
Expected Output: Hello, it is 2024!

```

## 4. Dependencies
* Node.js: v18.8.0 (or newer)

## 5. Test Report
### Overview
All unit tests for the text-checking modules have been executed successfully without any failures.

#### Test Execution Details
##### TextAverages
Two different tests for counting the average word and senrence length: Successful
##### TextCounter
Eight different tests for counting characters (with and without spaces), letters, words, sentences, paragraphs, vowels, and consonants: Successful
##### TextFrequency
Five different tests for determining the most used letters, words, symbols, numbers, and pronouns: Successful
##### TextInputValidator
Tests for input validation including length and content checks, removal of additional spaces, and retrieval of validated text: Successful
##### TextManipulator
Nine tests for text manipulation functions like replacing words, symbols, and numbers, as well as reversing the entire text and reversing the order of sentences: Successful

Test Status: All Passed

All tests for the modules passed successfully.
Continuous testing is recommended as more features or changes are introduced.


## 6. Issues & Bug Reports
Please see: [Issues Link](https://github.com/ceciliajonsson/L2-1DV610/issues)

## 7. License
This project is open source, licensed under the MIT License. 
Check out the LICENSE file for more details.

## 8. Contributing
Please get in contact with Cecilia if you want to contribute to the project.