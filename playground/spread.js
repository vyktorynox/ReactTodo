function add(a,b){
  return a+b
}

console.log(add(3,1));

var toAdd = [9,5];

console.log(add(...toAdd));

var groupA = ['jen', 'cory'];
var groupB = ['javier'];
var final = [3, ...groupB, ...groupA];

console.log(final);

var person = ['lorelai', 31];
var personTwo = ['laura', 25];



function greet(name, age) {
  return 'Hi '+name+', you are '+age
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var finalNames = ['Javier',...names]

finalNames.map((name) => {
  console.log('Hi '+name);
});
