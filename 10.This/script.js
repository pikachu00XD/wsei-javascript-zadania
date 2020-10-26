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

//Zadanie 3

const calculator =
{
  a : 0,
  b : 0,
  setAB(a, b) {this.a = a; this.b = b;},
  addition() {console.log(this.a + this.b)},
  subtraction() {console.log(this.a - this.b)},
  multiplication() {console.log(this.a * this.b)},
  division() {if(this.b == 0) console.log("Nie można dzielić przez 0"); else console.log(this.a / this.b)}
}

//Zadanie 4

let ladder =
{
  maxStep : 10,
  step : 0,
  getOn() {if(this.step == 0) {this.step++; console.log(`Wszedłeś na ${this.step} stopień`);}
          else console.log("Już jesteś na drabinie")},
  getDown() {if(this.step == 1) {step--; console.log("Zszedłeś z drabiny");}
            else if(this.step == 0) console.log("Musisz znajdować sie na drabinie aby aktywować tą metode");
            else {this.step--; console.log(`Zszedłeś na ${this.step} stopień`)}},
  getUp() {if(this.step == this.maxStep) console.log("Nie możesz iść wyżej");
          else if(this.step == 0) console.log("Musisz znajdować sie na drabinie aby aktywować tą metode");
          else {this.step++; console.log(`Wszedłeś na ${this.step} stopień`)}}
}
