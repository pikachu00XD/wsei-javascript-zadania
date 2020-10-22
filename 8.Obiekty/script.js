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
