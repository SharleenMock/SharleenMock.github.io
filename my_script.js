function addition(a, b) {
a = parseInt(a); b = parseInt(b);
c = a + b;
return c;
}
function get_values() {
var a = prompt("Enter first number:");
var b = prompt("Enter second number:");
var z = addition(a,b); alert("The answer is:" + z);
}
