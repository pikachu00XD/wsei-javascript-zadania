//Zadanie 1

const groupMoreDivs = document.getElementsByClassName('more-divs');
console.log(groupMoreDivs);

//Zadanie 2

const shortElement = document.querySelector('.short-list');
console.log(shortElement.innerHTML);
console.log(shortElement.outerHTML);
console.log(shortElement.className);
console.log(shortElement.classList);
console.log(shortElement.dataset);

//Zadanie 3

const dataSetObject = document.getElementById('datasetCheck');
var num1 = parseInt(dataSetObject.dataset.numberone);
var num2 = parseInt(dataSetObject.dataset.numbertwo);
var num3 = parseInt(dataSetObject.dataset.numberThree);

let calculateDataset = function(num1, num2, num3){
    var addition = num1+num2+num3;
    var substraction = num1-num2-num3;
    console.log(addition, substraction);
}
calculateDataset(num1, num2, num3);

//Zadanie 4

document.getElementById('spanText').innerText = "XD";

//Zadanie 5

document.getElementById('spanText').className = "XD";

//Zadanie 6

const divWithClasses = document.getElementById('classes');

let showClasses = function(list)
{
    let mainString = "";
    for(var i = 0; i < list.length; i++)
    {
        console.log(list[i]);
        mainString += list[i]+"+";
    }
    console.log(mainString);
}
showClasses(divWithClasses.classList);
divWithClasses.removeAttribute('class');
console.log("Usunięto wszystkie klasy");

//Zadanie 7

const allLiElements = document.getElementById('longList').getElementsByTagName('li');
let addAtribute = function(list)
{
    for(var i = 0; i < list.length; i++)
    {
        if(list[i].hasAttribute('data-text')){}
        else list[i].setAttribute('data-text', 'text');
    }
}
addAtribute(allLiElements);

//Zadanie 8

let readConvertString = function(objectString)
{
    const newClassName = objectString.newClass;
    document.getElementById('myDiv').className = newClassName;
}

let getString = function(string)
{
    const stringObject ={
        newClass: string
    }
    readConvertString(stringObject)
}
getString("XD");

//Zadanie 9

let setClassFromRandNum = function(num)
{
    const element = document.getElementById('numbers');
    if(num%2 == 0){element.className = 'even'}
    else if(num%2 == 1){element.className = 'odd'}
}

let randomNumber = Math.floor(Math.random() * 11);
setClassFromRandNum(randomNumber);

//Zadanie 10

let returnValues = function(element)
{
    let tab = [];
    var j = 0;
    for(var i = 0; i < element.innerText.length/2; i++)
    {
        tab[i] = element.innerText[j];
        j+=2;
    }
    console.log(tab);
}

returnValues(document.getElementById('longList'));

//Zadanie 11

let getChildren = function(dzieciaki)
{
    for(var i = 0; i < dzieciaki.length; i++)
    {
        let randomNum = Math.floor(Math.random() * 11);
        dzieciaki[i].setAttribute('data-past-number', dzieciaki[i].innerText);
        dzieciaki[i].innerText = randomNum;
    }
}
getChildren(document.getElementById('longList').children);

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
