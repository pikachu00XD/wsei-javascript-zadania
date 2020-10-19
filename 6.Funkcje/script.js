//Zadanie 1

function x(){console.log("Udało Się!")}
x();

//Zadanie 2

function x(z){console.log(z)}

x(2137);
x("XD");
x('!');
x(NaN);
x(undefined);

//Zadanie 3

function x(y){return y}
const tab = [2, 13, "XD", '7']
x(tab);

//Zadanie 4

function f(x)
{
  var y = 0;
  var n = setInterval(() => 
  {
    console.log(x);
    y++;
    
    if(y == 5)
    {
      console.log("Koniec");  
      clearInterval(n);
    }
  }, 3000);
}

var str = "XD";

f(str);
