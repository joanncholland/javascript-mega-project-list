// string = 'I need to convert this text into Pig Latin. Hopefully it works! Stuff stuff stuff'

// console.log('The original string is:\n' + string.toUpperCase() + '\n')

/**
 * RULES:
 * 1. Words beginning with single constonant: all letters before initial vowel are placed at the end, with 'ay.' i.e. banana -> ananabay
 * 2. Words beginning with constonant clusters: whole sound added to the end. i.e. smile -> ilesmay
 * 3. Words beginning with vowels: 'ay' added to the end of the word. i.e. egg -> eggay
 */



function translateIntoPigLatin() {
    let userInput = document.getElementById('inputText').value
    console.log(userInput)

    // CHANGE WORDS BEGINNING WITH VOWELS
    // use regex to detect beginning of word, and which rule to apply to it
    const vowelRegex = /\b[aeiou]{1,2}[a-zA-Z]*/gmi
    // console.log(vowelRegex)
    const vowelFound = userInput.match(vowelRegex)
    // console.log(vowelFound)
    for (index in vowelFound) {
        let replacement = vowelFound[index] + 'ay'
        userInput = userInput.replace(vowelFound[index], replacement)
    }

    // CHANGE WORDS BEGINNING WITH SINGLE CONSTONANTS
    const singleConstonantRegex = /\b[^\saeiou]{1,1}[aeiou][a-zA-Z]*\b/gmi
    const singleConstonantFound = userInput.match(singleConstonantRegex)
    for (index in singleConstonantFound) {
        wordArray = singleConstonantFound[index].split('')
        wordArray.push(wordArray.shift())
        wordArray = wordArray.join('') + 'ay'

        userInput = userInput.replace(singleConstonantFound[index], wordArray)
        // console.log(wordArray)


    }

    // CHANGE WORDS BEGINNING WITH CONSTONANT CLUSTERS
    const twoConstonantRegex = /\b[^\saeiou][^\saeiou]{1,3}[a-zA-Z]*\b/gmi
    const twoConstonantFound = userInput.match(twoConstonantRegex)
    for (index in twoConstonantFound) {
        wordArray = twoConstonantFound[index].split('')
        wordArray.push(wordArray.shift())
        wordArray.push(wordArray.shift())

        wordArray = wordArray.join('') + 'ay'

        userInput = userInput.replace(twoConstonantFound[index], wordArray)
    }
    userInput = userInput.toUpperCase()

    console.log(userInput)
    document.getElementById('result').innerHTML = userInput
}



