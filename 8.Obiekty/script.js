//Zadanie 1

const car = {
  name : "BMW",
  color : "red",
  type : "sport",
  showText() {return "bruuum";}
}

console.log(car);

//Zadanie 2

const car = {
  name : "BMW",
  color : "red",
  type : "sport",
  showText() {return "bruuum";},
  changeName : function(name)
  {
    this.name = name;
  }
}
car.changeName("Mercedes");

//Zadanie 3

const calculate =
{
  sum : 0,
  calculateSum : function(x)
  {
    for(var i = 0; i<x.length; i++)
      {
        this.sum += x[i];
      }
  }
}
var tab = [1, 2, 3];
calculate.calculateSum(tab);
console.log(calculate.sum);

//Zadanie 4

const car = 
{
  name : "BMW",
  age : 12,
  maxSpeed : 260,
  firstUser : true,
  everDestroyed : false
}

for(let key in car)
  {
    console.log(key + ": " + car[key]);
  }

//Zadanie 5
