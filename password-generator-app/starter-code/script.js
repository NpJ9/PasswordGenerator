// TO DO

// 1. 
// Generate a password all in Uppercaseletters according to character length
// Set character to length a default
// Generate a randomized string of Uppercase characters

// 2. 
// Generate a password all in Lowercase according to character length
// Set character to length a default
// Generate a randomized string of Lowercase characters

// 3. 
// Generate a password all in numbers according to character length
// Set character to length a default
// Generate a randomized string of numbers characters

// 4. 
// Generate a password all in symbols according to character length
// Set character to length a default
// Generate a randomized string of symbols characters





// Generates cryptographically strong random numbers
// Better than Math.random as that is insecure   

let getRandomNumber = () => {
    let randomNumber = new Uint32Array(1); 
    crypto.getRandomValues(randomNumber); 
    console.log("Shuffled Number: " + randomNumber);
}

// Generate a randomized string of symbols characters

let getRandomSymbols = () => {
    let symbols = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/'
    let randomSymbolsArray = symbols.split('');
    let currentIndex = randomSymbolsArray.length;
    
    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [randomSymbolsArray[currentIndex], randomSymbolsArray[randomIndex]] =[
            randomSymbolsArray[randomIndex], randomSymbolsArray[currentIndex]];
    }

    console.log("Shuffled symbols: " + randomSymbolsArray)
    
}

// For shuffle
// Fisher-Yates Shuffle 

let getRandomLetters = ()=> {
    let arr ='abcdefghijklmnopqrstuvwxyz';
    let result = arr.split('');
    let currentIndex = result.length;

    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [result[currentIndex], result[randomIndex]] =[
            result[randomIndex], result[currentIndex]];
    }

    console.log("shuffled alphabet: " + result.join(''));
}


getRandomNumber();
getRandomSymbols();
getRandomLetters();



