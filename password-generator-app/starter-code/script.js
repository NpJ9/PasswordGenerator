let button = document.getElementById("generate");
let slider = document.getElementById("slider");
let numberChecked = document.getElementById("numbers");
let lowerCaseChecked = document.getElementById("lowercase");
let upperCaseChecked = document.getElementById("uppercase");
let symbolsChecked = document.getElementById("symbols");
let svgBtn = document.getElementById("svgBtn");
let passwordLength = 10;
let numbers ='1234567890'; 
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
let UppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ'
let symbols = '~`!@#$%^&*()_-+={[}]|\:;"<,>.?/';
let password = '';
let strengthCounter = 0;

button.addEventListener('click' , (e) =>{
    check();
    document.getElementById("paswordoutput").textContent = password;
    password='';
    strengthCounter = 0;
});

// Copy on svg click 
svgBtn.addEventListener('click' , (e) =>{
    let copied = document.getElementById("paswordoutput").textContent
    navigator.clipboard.writeText(copied);
});

// Get slider input 

document.getElementById("slider").oninput = function(){
    passwordLength = document.getElementById("slider").value;
    document.getElementById("passLength").innerHTML = passwordLength;
    console.log("New password length " + passwordLength)
}

let check = () => {
    if(document.getElementById('uppercase').checked === true)
        {password = password.concat(UppercaseLetters)
            strengthCounter = strengthCounter + 1};

    if(document.getElementById('lowercase').checked === true) 
        {password = password.concat(lowerCaseLetters)
            strengthCounter = strengthCounter + 1}; 

    if(document.getElementById('numbers').checked === true)
        {password = password.concat(numbers)
            strengthCounter = strengthCounter + 1};

    if(document.getElementById('symbols').checked === true)
        {password = password.concat(symbols)
            strengthCounter = strengthCounter + 1};

password = password.split('');

// Fisher–Yates Shuffle

    let currentIndex = password.length;
    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [password[currentIndex], password[randomIndex]] =[
            password[randomIndex], password[currentIndex]];
    }

    password = password.splice(0 , passwordLength).join('');
    
    console.log("Your password is: " + password);

    // Change Display levels
    
    if (strengthCounter === 0){
        document.getElementById("strength1").style.backgroundColor= 'white';
        document.getElementById("strength2").style.backgroundColor= 'white';
        document.getElementById("strength3").style.backgroundColor= 'white';   
        document.getElementById("strength4").style.backgroundColor= 'white';
        document.getElementById("strengthtext").textContent = "N/A"
    } else if (strengthCounter === 1){
        document.getElementById("strength1").style.backgroundColor= 'red';
        document.getElementById("strength2").style.backgroundColor= 'white';
        document.getElementById("strength3").style.backgroundColor= 'white';
        document.getElementById("strength4").style.backgroundColor= 'white';
        document.getElementById("strengthtext").textContent = "Weak"
    } else if (strengthCounter === 2){
        document.getElementById("strength1").style.backgroundColor= 'orange';
        document.getElementById("strength2").style.backgroundColor= 'orange';
        document.getElementById("strength3").style.backgroundColor= 'white';
        document.getElementById("strength4").style.backgroundColor= 'white';
        document.getElementById("strengthtext").textContent = "Ok"
    } else if (strengthCounter === 3){
        document.getElementById("strength1").style.backgroundColor= 'yellow';
        document.getElementById("strength2").style.backgroundColor= 'yellow';
        document.getElementById("strength3").style.backgroundColor= 'yellow';   
        document.getElementById("strength4").style.backgroundColor= 'white';
        document.getElementById("strengthtext").textContent = "Strong"
    } else if (strengthCounter === 4) {
        document.getElementById("strength1").style.backgroundColor= 'green';
        document.getElementById("strength2").style.backgroundColor= 'green';
        document.getElementById("strength3").style.backgroundColor= 'green';   
        document.getElementById("strength4").style.backgroundColor= 'green';
        document.getElementById("strengthtext").textContent = "Very Strong"
    } 
    
}
// TO DO
// Check the strength (how long/ how complex )
// Make sure the password actually contains the added values (num?Upper)
