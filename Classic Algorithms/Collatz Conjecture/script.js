console.log('connected')
let sequence = []

function collatzConjecture(n) {
    if (n===1) {
        return n
    } else {
        // console.log(n)
        sequence.push(n)
        if (n%2===0) {
            n=n/2
            return collatzConjecture(n)
        } else {
            n=3*n+1
            return collatzConjecture(n)
        }
    }
}

let resultCalculation = document.getElementById('resultCalculation')

function showResult() {
    let userInput = parseInt(document.getElementById('nValue').value)
    collatzConjecture(userInput)
    for (let i = 0; i < sequence.length; i++){
        if (sequence[i]%2 === 0) {
            let node = document.createElement("li")
            let string = `The number ${sequence[i]} is even, so divide it by two to get ${sequence[i]/2}`
            let textnode = document.createTextNode(string)
            node.appendChild(textnode)
            resultCalculation.appendChild(node)
        } else {
            let node = document.createElement("li")
            let string = `The number ${sequence[i]} is odd, so multiply it by three and add 1 to get ${sequence[i]*3+1}`
            let textnode = document.createTextNode(string)
            node.appendChild(textnode)
            resultCalculation.appendChild(node)

        }
    }
    // document.getElementById('result').innerHTML = sequence
}

// collatzConjecture(10)
// console.log(sequence)