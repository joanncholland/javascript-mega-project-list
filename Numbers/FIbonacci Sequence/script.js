function getUserInput() {
    let userInput = document.getElementById('n-value').value
    if (userInput < 0) {
        alert("You need to enter a positive number")
    } else {
        let result = fibonacci(userInput)
        document.getElementById('result').innerHTML = result
    }
}

// find the nth Fibonacci number using a recursive algorithm
function fibonacci(n){
    if (n<2) {
        return n // base case
    } else {
        return fibonacci(n -1) + fibonacci(n - 2) // recursive case
    }
}
