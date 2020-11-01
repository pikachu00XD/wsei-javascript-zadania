//Zadanie 1

const myDiv1 = document.getElementById('buz');
console.log(myDiv1.parentElement);

const myDiv2 = document.getElementById('baz');
console.log(myDiv2.previousElementSibling);

const myDiv3 = document.getElementById('foo');
console.log(myDiv3.children);

const myDiv4 = document.getElementById('foo');
console.log(myDiv4.parentElement);

const myDiv5 = document.getElementById('foo');
console.log(myDiv5.firstElementChild);

const myDiv6 = document.getElementById('foo');
console.log(myDiv6.firstElementChild.nextElementSibling);

//Zadanie 2

const redButton = document.getElementById('ex2');
redButton.addEventListener('click', function(){
    console.log(redButton.lastElementChild.innerText, this);
})

//Zadanie 3

let eventCallback = function(){
    if(this.nextElementSibling.getAttribute('style') == 'display:inline'){this.nextElementSibling.setAttribute('style', 'display:none');}
    else if (this.nextElementSibling.getAttribute('style') == 'display:none'){this.nextElementSibling.setAttribute('style', 'display:inline');}
}

const myDiv7 = document.getElementById('ex3');
const vievHideButtons = myDiv7.getElementsByTagName('button');

for(var i = 0; i<vievHideButtons.length; i++)
{
    vievHideButtons[i].addEventListener('click', eventCallback);
}
console.log(vievHideButtons[1].nextElementSibling.getAttribute('style'))

//Zadanie 4

let changeToRandomColor = function(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.parentElement.setAttribute('style', 'background-color: '+randomColor);
}

for(var i = 0; i<vievHideButtons.length; i++)
{
    vievHideButtons[i].addEventListener('click', changeToRandomColor);
}

//Zadanie 5

const colorDiv = document.getElementById('ex5');
const colorDivRectangles = colorDiv.getElementsByTagName('div');
const colorDivList = colorDiv.querySelector('ul');
const colorDivListAllLi = colorDivList.getElementsByTagName('li');

//1
let onlyFirstElement = function(){
    let color = this.style.backgroundColor;
    colorDivList.firstElementChild.setAttribute('style', 'background-color:'+color);
}
//2
let onlyLasttElement = function(){
    let color = this.style.backgroundColor;
    colorDivList.lastElementChild.setAttribute('style', 'background-color:'+color);
}
//3
let onlyEvenElements = function(){
    let color = this.style.backgroundColor;
    for(var i = 1; i<colorDivListAllLi.length; i+=2)
    {
        colorDivListAllLi[i].setAttribute('style', 'background-color:'+color);
    }
}
//4
let allElements = function(){
    let color = this.style.backgroundColor;
    for(var i = 0; i<colorDivListAllLi.length; i++)
    {
        colorDivListAllLi[i].setAttribute('style', 'background-color:'+color);
    }
}
//5
let onlyList = function(){
    let color = this.style.backgroundColor;
    colorDivList.setAttribute('style', 'background-color:'+color);
}

for(var i = 0; i<colorDivRectangles.length; i++)
{
    colorDivRectangles[i].addEventListener('mouseover', onlyFirstElement);
}

//Zadanie 6

const mainDiv = document.getElementById('ex6');
const smallDiv1 = mainDiv.firstElementChild.firstElementChild.firstElementChild;
const smallDiv2 = mainDiv.firstChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
const smallDiv3 = mainDiv.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
