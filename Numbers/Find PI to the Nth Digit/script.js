function getUserInput() {
    let userInput = document.getElementById('n-value').value
    if (userInput <= 0 || userInput > 48) {
        alert("You need to enter a number between 1 and 48.")
    } else {
        let pi = Math.PI
        let result = pi.toFixed(userInput)
        document.getElementById('result').innerHTML = result
    }
}