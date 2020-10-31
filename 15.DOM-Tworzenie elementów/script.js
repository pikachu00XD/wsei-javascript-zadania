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

var newInputFName = document.createElement('input');
newInputFName.type = "text"; newInputFName.id = "fName"; newInputFName.name = "fName";
var newLabelFName = document.createElement('label');
newLabelFName.for = "fName"; newLabelFName.innerText = "Imie";
tab[0] = newInputFName;
tab[1] = newLabelFName;

var newInputLName = document.createElement('input');
newInputLName.type = "text"; newInputLName.id = "lName"; newInputLName.name = "lName";
var newLabelLName = document.createElement('label');
newLabelFName.for = "lName"; newLabelLName.innerText = "Nazwisko";
tab[2] = newInputLName;
tab[3] = newLabelLName;

var newInputAge = document.createElement('input');
newInputAge.type = "number"; newInputAge.id = "age"; newInputAge.name = "age"; newInputAge.min = 0;
var newLabelAge = document.createElement('label');
newLabelAge.for = "age"; newLabelAge.innerText = "Wiek";
tab[4] = newInputAge;
tab[5] = newLabelAge;

var newInputNumChild = document.createElement('input');
newInputNumChild.type = "number"; newInputNumChild.id = "numChild"; newInputNumChild.name = "numChild"; newInputNumChild.min = 0;
var newLabelNumChild = document.createElement('label');
newLabelNumChild.for = "numChild"; newLabelNumChild.innerText = "Ilość dzieci";
tab[6] = newInputNumChild;
tab[7] = newLabelNumChild;

for(var i = 0; i<tab.length; i+=2)
{
    var newBr = document.createElement('br');
    newForm2.appendChild(tab[i]);
    newForm2.appendChild(tab[i+1]);
    newForm2.appendChild(newBr);
}

