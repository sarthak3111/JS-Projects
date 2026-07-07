let  random=parseInt(Math.random()*100)

const userInput=document.querySelector('#guessField')
const previous=document.querySelector('.guesses')
const submit=document.querySelector('#subt')
const startover=document.querySelector('.resultParas')
const loworhigh=document.querySelector('.lowOrHi')
const remaining=document.querySelector('.lastResult')

let playgame=true;
let p =document.createElement('p')
let numguess=1;
let prevguess=[]

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(userInput.value)
        validateguess(guess);
    })
}
function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter vaid number');
    }else if(guess<1){
        alert('please enter number greater than 1');
    }
    else if(guess>100){
        alert('please enter number less than 100');
    }
    else{
        prevguess.push(guess);
      if(numguess===11){
        displayguess(guess)
        endgame();
      }
      else{
        displayguess(guess);
        checkguess(guess)
      }
    }
}
function checkguess(guess){//number checked with random 
    if(guess===random){
        displayMessage(`Bingo you guessed it !`)
        endgame();
    }else if(guess<random){
        displayMessage(`num is too low`)
    }else if(guess>random){
        displayMessage(`num is too high`)
    }
}
function displayguess(guess){
   userInput.value=''
   previous.innerHTML+=`${guess}  `
   numguess++;
   remaining.innerHTML=`${11-numguess}`
}
function displayMessage(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game </h2>`
    startover.appendChild(p)
    playgame=false
    newgame()

}
function newgame(){
    const newgamebutton=document.querySelector('#newGame')
    newgamebutton.addEventListener('click',function(){
        userInput.value=''
        userInput.removeAttribute('disabled')
        playgame=true;
        prevguess=[]
        numguess=1;
        random=parseInt(Math.random()*100)
        previous.innerHTML=''
        startover.removeChild(p)
        remaining.innerHTML=`${11-numguess}`
        loworhigh.innerHTML=''
    })

}

