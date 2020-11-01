//Zadanie 1

const lists = document.getElementsByClassName('list');

//Zadanie 2

function search(element)
{
    var y = document.getElementsByTagName(element);
    console.log(y);
}

//Zadanie 3

const list = document.getElementById('list');

//Zadanie 4

function f(x)
{
    console.log(document.querySelectorAll(x));
}

f("li");
f("ul");
f("span");
f("div.list span");
f("div#spans span");

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
