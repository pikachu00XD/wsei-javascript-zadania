//Zadanie 1

var tab = ["XD", 54, '!'];

for(var i=0; i<3; i++)
  {
    console.log(tab[i]);
  }
  
//Zadanie 2

var tab = [2137, "XD", 420, 69, "jp2gmd", "papaj"];
//1
console.log(tab[0] + tab[1]);
//2
console.log(tab[tab.length - 1]);
//3
console.log(tab);
//4
for (var i=0; i<tab.length; i+=2)
  {
    console.log(tab[i]);
  }
//5
var filteredStr = tab.filter(function(value)
{
  return!(parseInt(value) == value)
})
console.log(filteredStr);
//6
var filteredNum = tab.filter(function(value)
{
  return(parseInt(value) == value)
})
console.log(filteredNum);

//Zadanie 3

var tab = [21, 37, 4, 20, 6, 9]
//1
var sum = 0;
for(var i=1; i<(tab.length - 1); i++)
  {
    sum += tab[i];
  }
console.log(sum);
//2
var dif = 0;
for(var i=1; i<(tab.length - 1); i++)
  {
    dif -= tab[i];
  }
console.log(dif);
//3
var avr = sum/(tab.length-2);
console.log(avr);
//4
for(var i=1; i<(tab.length - 1); i++)
  {
    if(tab[i]%2 == 0) console.log(tab[i]);
  }
//5
for(var i=1; i<(tab.length - 1); i++)
  {
    if(tab[i]%2 !== 0) console.log(tab[i]);
  }
//6
var max = 0;
for(var i=1; i<(tab.length - 1); i++)
  {
    if(max<tab[i]) max=tab[i];
  }
console.log(max);
//7
var min = tab[0];
for(var i=1; i<(tab.length - 1); i++)
  {
    if(min>tab[i]) min=tab[i];
  }
console.log(min);
//8
for(var i = (tab.length - 2); i>0; i--)
  {
    console.log(tab[i]);
  }

//Zadanie 4

function f(x)
{
  var sum = 0;
  for(var i=0; i<x.length; i++)
  {
    sum += x[i];
  }
  console.log(sum);
}

var tab = [32, 19, 20, 19];
f(tab);

//Zadanie 5

function f(x)
{
  var sum = 0;
  for(var i=0; i<x.length; i++)
  {
    sum += x[i];
  }
  var avr = sum/x.length;
  for(var i=0; i<x.length; i++)
    {
      console.log(x[i]*avr);
    }
}

var tab = [11, 22, 33, 44, 55];
f(tab);

//Zadanie 6

function f(x)
{
  var eveNum = [];
  var j=0;
  var sum = 0;
  for(var i = 0; i<x.length; i++)
    {
      if(x[i]%2 == 0)
        {
          eveNum[j] = x[i];
          sum += eveNum[j];
          j++;
        }
    }
  var avr = sum/eveNum.length;
  console.log(avr);
}

var tab = [23, 45, 18, 24, 10];
f(tab);

//Zadanie 7

function f(x)
{
  console.log(x.sort())
}

var tab = ["XD", "Tak", "To", "Moja", "Praca"];
f(tab);

//Zadanie 8

function f(x,y)
{
  var tab = [];
  for(var i=0; i<x.length; i++)
    {
      tab[i] = x[i] + y[i];
    }
  console.log(tab);
}

var tab1 = [1, 2, 3, 4, 5];
var tab2 = [1, 2, 3, 4, 5];
f(tab1,tab2);

//Zadanie 9

function f(x,y)
{
  var index = x.indexOf(y);
  if(index >=0)
    {
      x.splice(index, 1);
    }
  var newTab = x;
  console.log(newTab);
}

var tab = [2, 1, 3, 7];
f(tab, tab[2])

//Zadanie 10
