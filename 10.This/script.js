//Zadanie 1

function Person(firstName, lastName, age, country, city)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city
}

Person.prototype.info = function()
{
    console.log(`
Imie: ${this.firstName}\n 
Nazwisko: ${this.lastName}\n 
Wiek: ${this.age}\n 
Państwo: ${this.country}\n 
Miasto: ${this.city}`);
}
Person.prototype.upAge = function()
{
  this.age += 1;
}

let person = new Person("Adam", "Nowak", 19, "Poland", "Warsaw");
let person2 = new Person("Grzegorz", "Brzęczyszczykiewicz", 25, "Poland", "Chrząszczyrzewoszyce");

person.info();
person.upAge();
person.info();

person2.info();
person2.upAge();
person2.upAge();
person2.info();

//Zadanie2

//Zadanie 1

function Person(firstName, lastName, age, country, city)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city
}

Person.prototype.info = function()
{
    console.log(`
Imie: ${this.firstName}\n 
Nazwisko: ${this.lastName}\n 
Wiek: ${this.age}\n 
Państwo: ${this.country}\n 
Miasto: ${this.city}`);
}
Person.prototype.upAge = function()
{
  this.age += 1;
}

let person = new Person("Adam", "Nowak", 19, "Poland", "Warsaw");
let person2 = new Person("Grzegorz", "Brzęczyszczykiewicz", 25, "Poland", "Chrząszczyrzewoszyce");

Person.favFood = [];
Person.prototype.addFood = function(food)
{
  if(this.favFood === undefined) this.favFood = `${food}, `;
  else this.favFood += `${food}, `;
}
Person.prototype.vievFood = function()
{
  console.log(this.favFood);
}
