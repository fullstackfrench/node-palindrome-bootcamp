//User enters word
//Check if word is palindrome
    //Is the word spelled the same forwards and backwards
//If the word is the palindrome, print "This word is a palindrome!"
//If not, say word isn't palindrome!

document.querySelector('#checkButton').addEventListener('click', checkIfPalindrome)

function checkIfPalindrome() {

    const userInput = document.querySelector('#wordToCheck').value

    fetch( `/api?word=${userInput}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if (data.result) {
                document.querySelector('#result').innerText = 'This word is a palindrome!'
            } else {
                document.querySelector('#result').innerText = 'This word is NOT a palindrome!'
            }
        });
}


