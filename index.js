function customSplit(word, delimiter) {
    let arr = []
    if (typeof word !== 'string') {
        console.log('Input should be a string.');
    }

    if (typeof delimiter !== 'string') {
        console.log('Delimiter should be string.');
    }
    if (delimiter.length === 0) {
        for (let i = 0; i < word.length; i++) {
            arr.push(word[i])
        }
        return arr
    }


    let result = [];
    let myWord = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] === delimiter) {
            result.push(myWord);
            myWord = '';
        } else {
            myWord += word[i];
        }
    }

    result.push(myWord);

    return result;
}

console.log(customSplit('hello world', ' '))

function customTrim(str) {
    let startIndex = 0;
    let endIndex = str.length - 1;

    while (startIndex < str.length && isSpace(str[startIndex])) {
        startIndex++;
    }

    while (endIndex >= 0 && isSpace(str[endIndex])) {
        endIndex--;
    }

    if (endIndex < startIndex) {
        return '';
    }

    return str.slice(startIndex, endIndex + 1);
}

function isSpace(char) {
    return char === ' ' || char === '\n' || char === '\r' || char === '\t';
}

console.log(customTrim("    Hello world!"))

function customSlice(word, start, end) {
    let result = [];

    for (let i = 0; i < word.length; i++) {
        result.push(word[i]);
    }

    for (let j = start; j < result.length - 1; j++) {
        result[j] = result[j + 1];

    }

    result.length--;

    for (let i = end - 1; i < result.length - 1; i++) {
        result[i] = result[i + 1];
    }

    result.length--;

    console.log(result);

}

customSlice('Hello', 1, 3)

function customReplace(sentence, word1, word2) {
    let words = [];
    let myWord = '';

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === ' ') {
            if (myWord !== '') {
                words.push(myWord);
                myWord = '';
            }
        } else {
            myWord += char;
        }
    }

    if (myWord !== '') {
        words.push(myWord);
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            words[i] = word2
        }
    }
    console.log(words)
}

customReplace('hello my dear', 'hello', 'goodBy');