function getUserInput() {
    let userInput = document.getElementById('n-value').value
    if (userInput <= 0 || userInput > 51) {
        alert("You need to enter a number between 1 and 51.")
    } else {
        let e = Math.E
        let result = e.toFixed(userInput)
        document.getElementById('result').innerHTML = result
    }
}