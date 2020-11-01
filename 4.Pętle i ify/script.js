//Zadanie 1

var num1 = 63;
var num2 = 45;

if(num1 > num2) {console.log(num1);}
else {console.log(num2);}

//Zadanie 2

var number1 = 5
var number2 = 4
var number3 = 3

if(number1 > number2 && number1 > number3) {console.log(number1);}
else if(number2 > number3) {console.log(number2);}
else {console.log(number3)}

//Zadanie 3

var x = 0;
while(x<10)
  {
    console.log("Lubie JavaScript");
    x++;
  }

//Zadanie 4

var result = 0;
var x = 1;
while(x<=10)
{
  result += x;
  x++;
}
console.log(result);

//Zadanie 5

var n = 7

for(var x = 0; x<=n; x++)
  {
    if(x%2==0){console.log(x + " - " + "parzysta")}
    
    else{console.log(x + " - " + "nieparzysta")}
  }

//Zadanie 6

for(let i=0; i< 5; i++)
{
    for(let j=0; j < 5; j++)
    {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7

console.log('0');
for(var x = 1; x<=100; x++)
  {
    if(x%3==0 && x%5==0){console.log("FizzBuzz")}
    
    else if(x%3==0){console.log("Fizz")}
    
    else if(x%5==0){console.log("Buzz")}
    
    else{console.log(x)}
  }

//Zadanie 8

//a

var x = '*';

for (var i=0;i<5;i++){
    console.log(x);
    x +='*';
}

//b

var x = '*';

for (var i=0;i<5;i++)
{
    var space = '';
    for (var k=1; k<5-i; k++)
    {
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}  

//c

var x = '*';

for (var i=0;i<5;i++)
{
    var space = '';
    for (var k=0; k<5-i; k++)
    {
        space += ' ';
    }
    console.log(space + x);
    x +='**';
}

//e

var x = '*';
for (var i=0;i<5;i++)
{
    var space = '';
    for (var k=1; k<5-i; k++)
    {
        space += ' ';
    }
    console.log(space + x);
    x +=' *';
}  

for(var j=0; j<4; j++)
  {
    console.log("    *");
  }

//           _
//       .__(.)< *kwa*Ten kod nie nadaje się
//        \___)   do dializy nerek*kwa*
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
