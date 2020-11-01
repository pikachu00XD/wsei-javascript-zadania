//Zadanie 1

const jsScript = document.querySelector('script');
const bodyDocument = document.querySelector('body');
const myDiv = document.createElement('div');
bodyDocument.insertBefore(myDiv, document.getElementById('root'));
myDiv.innerText = "To jest nowy element";

//Zadanie 2

const favFruits = document.createElement('ul');
bodyDocument.insertBefore(favFruits, jsScript);
favFruits.id = 'fruits';
for(var i = 0; i<6; i++)
{
    const newLi = document.createElement('li');
    document.getElementById('fruits').appendChild(newLi);
}

const listFruits = document.getElementById('fruits').children;
listFruits[0].innerText = "banan";
listFruits[1].innerText = "ananas";
listFruits[2].innerText = "brzoskwinia";
listFruits[3].innerText = "jabłko";
listFruits[4].innerText = "gruszka";
listFruits[5].innerText = "arbuz";

//Zadanie 3

favFruits.addEventListener('click', function(){
    for(var i = listFruits.length-1; i>0; i-=2)
    {
        var toDelete = listFruits[i];
        toDelete.parentElement.removeChild(toDelete);
    }
})

//Zadanie 4

const newButton = document.createElement('button');
bodyDocument.insertBefore(newButton, jsScript);

newButton.addEventListener('click', function(){
    this.parentElement.removeChild(this);
})

//Zadanie 5

let divMaker = function(number)
{
    for(var i = 1; i<=number; i++)
    {
        const newDiv = document.createElement('div');
        bodyDocument.insertBefore(newDiv, jsScript);
        newDiv.innerText = "to jest div numer " + i;
    }
}
divMaker(10);

//Zadanie 6

const newDiv1 = document.createElement('div');
newDiv1.innerText = "to jest div";
const newDiv2 = document.createElement('div');
newDiv2.className = "box";
const newDiv3 = document.createElement('div');
newDiv3.innerText = "to jest div";
const newSpan1 = document.createElement('span');
newSpan1.innerText = "to jest span";
const newSpan2 = document.createElement('span');
newSpan2.innerText = "to jest span";

bodyDocument.insertBefore(newDiv1, jsScript);
bodyDocument.insertBefore(newSpan1, jsScript);
bodyDocument.insertBefore(newDiv2, jsScript);
bodyDocument.querySelector('div.box').appendChild(newDiv3);
bodyDocument.insertBefore(newSpan2, jsScript);

//Zadanie 7

const newList1 = document.createElement('ul');
bodyDocument.insertBefore(newList1, jsScript);
newList1.id = 'list1';
const newButtonForList1 = document.createElement('button');
newList1.appendChild(newButtonForList1);

const newList2 = document.createElement('ul');
bodyDocument.insertBefore(newList2, jsScript);
newList2.id = 'list2';
const newButtonForList2 = document.createElement('button');
newList2.appendChild(newButtonForList2);

for(var i = 0; i < 10; i++)
{
    const newLi = document.createElement('li');
    newLi.innerText = 'XD';
    document.getElementById('list1').insertBefore(newLi, newButtonForList1);
}

newButtonForList1.addEventListener('click', function(){
    if(this.parentElement.getElementsByTagName('li') == null){this.disabled = true;}
    else {this.disabled = false}
    const elementToSend = this.parentElement.getElementsByTagName('li');
    document.getElementById('list2').insertBefore(elementToSend[elementToSend.length-1], newButtonForList2);
})
newButtonForList2.addEventListener('click', function(){
    if(this.parentElement.getElementsByTagName('li') == null){this.disabled = true;}
    else {this.disabled = false}
    const elementToSend = this.parentElement.getElementsByTagName('li');
    document.getElementById('list1').insertBefore(elementToSend[elementToSend.length-1], newButtonForList1);
})

// //Zadanie 8

var newForm1 = document.createElement('form');
bodyDocument.insertBefore(newForm1, jsScript);

var newInputElement = document.createElement('input');
newInputElement.type = "text"; newInputElement.id = "element"; newInputElement.name = "element";
newForm1.appendChild(newInputElement);

var newInputText = document.createElement('input');
newInputText.type = "text"; newInputText.id = "text"; newInputText.name = "text";
newForm1.appendChild(newInputText);

var newInputTextColor = document.createElement('input');
newInputTextColor.type = "color"; newInputTextColor.id = "color"; newInputTextColor.name = "color";
newForm1.appendChild(newInputTextColor);

var newInputNumber = document.createElement('input');
newInputNumber.type = "number"; newInputNumber.id = "number"; newInputNumber.name = "number";
newForm1.appendChild(newInputNumber);

var newInputButton = document.createElement('input');
newInputButton.type = "button"; newInputButton.id = "button"; newInputButton.name = "button"; newInputButton.value = "Create";
newForm1.appendChild(newInputButton);

newInputButton.addEventListener('click', function(){
    const type = document.getElementById('element').value;
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const quantity = document.getElementById('number').value;

    for(var i = 0; i<quantity; i++)
    {
        let newElement = document.createElement(type);
        newElement.innerText = text;
        newElement.setAttribute('style', 'color:'+color);
        newForm1.appendChild(newElement);
    }
})

//Zadanie 9

let tab = [];
var newForm2 = document.createElement('form');
bodyDocument.insertBefore(newForm2, jsScript);
newForm2.id = "XD";

var newInputFName = document.createElement('input');
newInputFName.type = "text"; newInputFName.id = "fName"; newInputFName.name = "fName"; newInputFName.className = "toGet";
var newLabelFName = document.createElement('label');
newLabelFName.for = "fName"; newLabelFName.innerText = "Imie"; newLabelFName.className = "toGet";
tab[0] = newInputFName;
tab[1] = newLabelFName;

var newInputLName = document.createElement('input');
newInputLName.type = "text"; newInputLName.id = "lName"; newInputLName.name = "lName"; newInputLName.className = "toGet";
var newLabelLName = document.createElement('label');
newLabelFName.for = "lName"; newLabelLName.innerText = "Nazwisko"; newLabelLName.className = "toGet";
tab[2] = newInputLName;
tab[3] = newLabelLName;

var newInputAge = document.createElement('input');
newInputAge.type = "number"; newInputAge.id = "age"; newInputAge.name = "age"; newInputAge.min = 0; newInputAge.className = "toGet";
var newLabelAge = document.createElement('label');
newLabelAge.for = "age"; newLabelAge.innerText = "Wiek"; newLabelAge.className = "toGet";
tab[4] = newInputAge;
tab[5] = newLabelAge;

var newInputNumChild = document.createElement('input');
newInputNumChild.type = "number"; newInputNumChild.id = "numChild"; newInputNumChild.name = "numChild"; newInputNumChild.min = 0; newInputNumChild.className = "toGet";
var newLabelNumChild = document.createElement('label');
newLabelNumChild.for = "numChild"; newLabelNumChild.innerText = "Ilość dzieci"; newLabelNumChild.className = "toGet";
tab[6] = newInputNumChild;
tab[7] = newLabelNumChild;

for(var i = 0; i<tab.length; i+=2)
{
    var newBr = document.createElement('br');
    newForm2.appendChild(tab[i]);
    newForm2.appendChild(tab[i+1]);
    newForm2.appendChild(newBr);
}

var newForm2ButtonMore = document.createElement('input');
newForm2ButtonMore.type = "button"; newForm2ButtonMore.value = "Więcej"; newForm2ButtonMore.id = "more"; newForm2ButtonMore.name = "more";
newForm2.appendChild(newForm2ButtonMore);

var newForm2ButoonCreate = document.createElement('input');
newForm2ButoonCreate.type = "button"; newForm2ButoonCreate.value = "Utwórz"; newForm2ButoonCreate.id = "create"; newForm2ButoonCreate.name = "create";
newForm2.appendChild(newForm2ButoonCreate);

var x = 0;
var createInputLabel = function(){
    for(var i = 0; i<=1; i++)
    {
        var newInput = document.createElement("input");
        newInput.type = "text"; newInput.id = "input"+x; newInput.name = "input"+x; newInput.className = "toGet"
        newForm2.insertBefore(newInput, newForm2ButtonMore);
        x++
    }
    var newBr = document.createElement('br');
    newForm2.insertBefore(newBr, newForm2ButtonMore);
}
newForm2ButtonMore.addEventListener('click', createInputLabel);

var deleteRow = function(){
    rowToDelete = this.parentElement;
    this.parentElement.parentElement.removeChild(rowToDelete);
}

var newStyle = document.createElement('style');
newStyle.innerHTML = 'td { border: 1px solid black; }';
bodyDocument.insertBefore(newStyle, document.getElementById('root'));

var createTable = function(){
    var tabElements = newForm2.getElementsByClassName('toGet');
    let newTab = document.createElement('tab');
    for(var i = 0; i<tabElements.length;)
    {
        let newTr = document.createElement('tr');
        for(var j = 0; j<=1; j++)
        {
            let newTd = document.createElement('td')
            if(i == 1 || i == 3 || i ==5 || i ==7){newTd.innerText = tabElements[i].innerText;}
            else {newTd.innerText = tabElements[i].value;}
            checkStrings(newTd);
            newTr.appendChild(newTd);
            i++;
        }
        var newButtonDelete = document.createElement('input');
        newButtonDelete.type = 'button'; newButtonDelete.value = "Usuń"; newButtonDelete.id = 'delete'; newButtonDelete.name = 'delete';
        newButtonDelete.addEventListener('click', deleteRow);
        newTr.appendChild(newButtonDelete);
        newTab.appendChild(newTr);
    }
    bodyDocument.insertBefore(newTab, jsScript);
}

newForm2ButoonCreate.addEventListener('click', createTable);

//Zadanie 10

var checkStrings = function(string){
    var char = string.innerText[0];
    var restOfWord = string.innerText.slice(1);
    string.innerText = char.toUpperCase() + restOfWord;
}

//Zadanie 11

let checkForNumb = function(string){
    var sum = 0;
    var product = 1;
    for(var i = 0; i<string.length; i++)
    {
        if(parseInt(string[i])==string[i])
        {
            sum += parseInt(string[i]);
            product *= string[i];
        }
    }
    console.log(sum);
    for(var i = 0; i<product; i++)
    {
        newDivString = document.createElement('div');
        newDivString.innerText = string;
        bodyDocument.insertBefore(newDivString, jsScript);
    }
}

checkForNumb("21XD37");

//Zadanie 12

let setString = function(string){
    document.getElementById('root').innerText = string;
}

setString("XD");

var checkDiv = document.getElementById('root');
checkDiv.method1 = function(){
    regex = /Ala/gi;
    if(regex.test(this.innerText)== true){
        let newString = this.innerText.replace(regex, 'Ola');
        this.innerText = newString;
    }
    else{
        var newDivError = document.createElement('div');
        newDivError.innerText = "Słowo Ala nie występuje w tekście.";
        this.appendChild(newDivError);
    }
}

checkDiv.method1();

//Zadanie 13

var firstFunction = function(string){
    let firstResult = [];
    for(var i = 0; i < string.length; i++){
        var sum = 0;
        for(var j = 0; j < string[i].length; j++){
            if(parseInt(string[i][j])==string[i][j]) sum++;
        }
        firstResult[i] = sum;
    }
    return firstResult;
}

var secondFunction = function(string){
    let secondResult = 0;
    for(var i = 0; i < string.length; i++){
        for(var j = 0; j < string[i].length; j++){
            if(parseInt(string[i][j])==string[i][j]) secondResult += parseInt(string[i][j]);
        }
    }
    return secondResult;
}

var thirdFunction = function(string){
    let returned1 = firstFunction(string);
    let returned2 = secondFunction(string);
    let sum = 0;
    for(var i = 0; i<returned1.length; i++){
        sum += returned1[i];
    }
    result = returned2/sum;
    return result;
}

const tabString = ["Mar4eT6", "123", "Ala"]

console.log(thirdFunction(tabString));

//Zadanie 14

let object3 = {
    name : "",
    surname : "",
    age : ""
}

var fillObject = function(name, surname, age){
    object3.name = name;
    object3.nameLenght = name.length;
    object3.surname = surname;
    object3.surnameLength = surname.length;
    object3.age = age;
    object3.ageLength = surname.length;

    if(object3.nameLenght > 5 || object3.surnameLength > 5 || object3.ageLength > 5){
        resetButton = document.createElement('button');
        resetButton.type = "reset"; resetButton.innerText = "RESET";
        resetButton.addEventListener('click', function(){
            object3 = {
                name : "",
                surname : "",
                age : ""
            }
            console.log(object3);
        })
        bodyDocument.insertBefore(resetButton, jsScript)
    }
    console.log(object3);
}

fillObject("Jan", "Krakowiak", "18");

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
