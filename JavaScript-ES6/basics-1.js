var x = 10;

document.getElementById("p1").innerHTML = x;

console.log("test let")
// Here x is 10
console.log(x);
{
    // The let keyword allows you to declare a variable with block scope.
    let x = 2;
    // Here x is 2
    console.log(x);
}
// Here x is 10
console.log(x);

console.log("test const")

var x = 10;
console.log(x)
// Here x is 10
{
  const x = 2;
  console.log(x)
  // Here x is 2
}
console.log(x)
// Here x is 10

console.log("ES5 function");

// ES5
var a = function(b, c) {
    return b * c;
}

console.log(a(3, 7));

console.log("ES6 function");

// ES6
let a = (b, c) => b * c;

console.log(a(3, 7));
