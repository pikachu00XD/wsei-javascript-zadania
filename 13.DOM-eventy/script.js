//Zadanie 1

const testButton = document.getElementById('test-event');
const wholeScreen = document.querySelector('body');
//1
testButton.addEventListener('click', function(event){
    console.log('Object event', event);
});
//2
wholeScreen.addEventListener('mousemove', function(event){
    console.log("Object event", event);
})
//3
testButton.addEventListener('mousemove', function(event){
    console.log('Object event', event);
});
//4
wholeScreen.addEventListener('keyup', function(event){
    console.log("Object event", event);
})
//5
wholeScreen.addEventListener('scroll', function(event){
    console.log("Object event", event);
})
//6
testButton.addEventListener('change', function(event){
    console.log("Object event", event);
})
testButton.addEventListener('click', function(){
    testButton.innerText = "XD";
})

//Zadanie 2

const buttonEx2 = document.getElementById('ex2');
buttonEx2.addEventListener('click', function(){
    buttonEx2.nextElementSibling.innerText = buttonEx2.dataset.text;
})

//Zadanie 3

const redSquare = document.getElementById('ex3');
redSquare.addEventListener('mousemove', function(){
    redSquare.setAttribute('style', 'background-color: blue;width: 50px;height: 50px;');
})
redSquare.addEventListener('mouseout', function(){
    redSquare.setAttribute('style', 'background-color: red;width: 50px;height: 50px;');
})

//Zadanie 4

let textBox = document.getElementById('input-test');
var noNumbers = /[0-9]/;
textBox.addEventListener('keyup', function(){
    if(textBox.value.match(noNumbers) == null)
    {
        textBox.nextElementSibling.innerText = "";
    }
    else if(textBox.value.match(noNumbers) !== null)
    {
        textBox.nextElementSibling.innerText = "Nie możesz wpisywać cyfr";
    }
})

//Zadanie 5

const countClicks = document.getElementById('ex5-button');
let clicks = 0;
let countAdd = function(){
    clicks++;
    countClicks.nextElementSibling.innerText = clicks;
    if(clicks === 10){this.removeEventListener('click', countAdd); countClicks.nextElementSibling.innerText = "";}
}
countClicks.addEventListener('click', countAdd)

//Zadanie 6

window.addEventListener('scroll', function(){
    if(window.scrollY >= 200){wholeScreen.style.backgroundColor = 'red'}
else if(window.scrollY < 200){wholeScreen.style.backgroundColor = 'white'}
})

//Zadanie 7

const calculator = document.getElementById('calculator');
const calculatorNumbers = calculator.querySelector('div');
const calculatorChars = calculator.lastElementChild;

let firstNumber;
let secondNumber;
let operation;

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
