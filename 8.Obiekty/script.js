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

const car = 
{
  name : "BMW",
  age : 12,
  maxSpeed : 260,
  firstUser : true,
  everDestroyed : false,
  engine :
  {
    power : "12V",
    diesel : true
  }
}

console.log(car.engine);

//Zadanie 6

const car = 
{
  name : "BMW",
  age : 12,
  maxSpeed : 260,
  firstUser : true,
  everDestroyed : false,
  engine :
  {
    power : "12V",
    diesel : true
  },
}

car.color = "blue";
car.Hello = function() {console.log("Hello")};

//Zadanie 4

let ladder =
{
  position : "down",
  getUp() {if(this.position == "up") console.log("Już jesteś na drabinie"); 
           else console.log("Wszedłeś na drabine"); this.position = "up" },
  getDown() {if(this.position == "down") console.log("Już zszedłeś z drabiny");
            else console.log("Zszedłeś z drabiny"); this.positon = "down"}
}
