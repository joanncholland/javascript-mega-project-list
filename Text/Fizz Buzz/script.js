function getUserInput() {
    let userInput = document.getElementById('n-value').value
    if (userInput < 0 || userInput > 100) {
        alert("You need to enter a number between 1 and 100.")
    } else {
        let result = fizzbuzz(userInput)
        document.getElementById('result').innerHTML = result
    }
}

/**
 * A function to output a result array, with length n,
 * and has "Fizz" instead of multiples of three, 
 * "Buzz" instead of multiples of five, and the number otherwise.
 * 
 * @param {int} n - The length of the array to output.
 */
function fizzbuzz(n){
    let result = []
    //generate array of numbers
    for(let i = 0; i < n; i++) {
        // replace multiples of three with "Fizz
        if(i%3===0) {
            result.push("Fizz")
        }
        // replace multiples of five with "Buzz"
        else if(i%5===0) {
            result.push("Buzz")
        }
        // otherwise, return number
        else {result.push(i)}
    }

    return result

}