let num=350;
let getBtn;
let noOfGuess=0;
let success=0;
getBtn=document.getElementById("windowBtn");
getBtn.addEventListener("click",()=> getNumber());

function getNumber(){
    num= window.prompt("Enter a number");
    if(num==10){
        window.alert("Right Number, Game Over");
        getBtn.setAttribute('disabled','')
        success=1;
    }
    else
    window.alert("Wrong number");
     console.log(num);
     if(noOfGuess<5 && success==0){
        window.alert("You have more guesses, Click the button again to guess");
        console.log("Total number of Guesses = "+noOfGuess);
    }
    if(noOfGuess==5){
        getBtn.setAttribute('disabled','')
        window.alert("No more guesses");
    }
    noOfGuess=noOfGuess+1;
    }
    