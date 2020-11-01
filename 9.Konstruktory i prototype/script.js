//Zadanie 1

function Person(firstName, lastName, age, country, city, language)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;
  this.ChangeCity = function(newCity) {this.city = newCity};
  this.ChangeAge = function(newAge) {this.age = newAge}
}

let person1 = new Person("Adam", "Kowalski", 18, "Poland", "Warsaw", "PL");
let person2 = new Person("Karolina", "Ptak", 20, "Poland", "Cracow", "PL");
let person3 = new Person("Mahmid", "Agbul", 32, "Egypt", "Kair", "ENG");
let person4 = new Person("Andżela", "Kobra", 15, "Poland", "Poznan", "PL");
let person5 = new Person("Jarosław", "Psikuta", 42, "Poland", "Warsaw", "PL");

person1.ChangeCity("Poznan"); person1.ChangeAge(20);
person2.ChangeCity("Warsaw"); person2.ChangeAge(2);
person3.ChangeCity("Cracow"); person3.ChangeAge(30);
person4.ChangeCity("Konin"); person4.ChangeAge(10);
person5.ChangeCity("Chrząszczyrzebożyce"); person5.ChangeAge(69);

//Zadanie 2

function Calculator(){
  this.memory = [];
  this.clearMemory = function(){this.memory = []}
  this.showMemory = function(){console.log(this.memory)}
  
  this.addition = function(a, b){
    console.log(`${a}+${b}=${a+b}`);
    this.memory += `${a}+${b}=${a+b}; `;
  }
  this.subtraction = function(a, b){
    console.log(`${a}-${b}=${a-b}`);
    this.memory += `${a}-${b}=${a-b}; `;
  }
    this.multiplication = function(a, b){
    console.log(`${a}*${b}=${a*b}`);
    this.memory += `${a}*${b}=${a*b}; `;
  }
    this.division = function(a, b){
    console.log(`${a}/${b}=${a/b}`);
    this.memory += `${a}/${b}=${a/b}; `;
  }
}

let calculator1 = new Calculator();
calculator1.addition(2, 2);
calculator1.subtraction(2, 2);
calculator1.multiplication(2, 2);
calculator1.division(2, 2);
calculator1.showMemory();
calculator1.clearMemory();
calculator1.showMemory();

let calculator2 = new Calculator();
calculator1.addition(3, 3);
calculator1.subtraction(3, 3);
calculator1.multiplication(3, 3);
calculator1.division(3, 2);
calculator1.showMemory();
calculator1.clearMemory();
calculator1.showMemory();

//Zadanie 3
