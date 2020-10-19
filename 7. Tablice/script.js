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
